import React, { useState, useRef, useEffect } from "react";
import imgbg2 from "../assets/images/img-bg2.png";
import ErrorMsg from "./ErrorMsg";
import Sponsor from "./Sponsor";
import UploadPhoto from "./UploadPhoto";
import Input from "./Input";
import { db, storage, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as r, set, getDatabase, child, get } from "firebase/database";





const Registration = () => {
  const [name, setName] = useState("");
  const [nowa, setNowa] = useState("");
  const [sosmed, setSosmed] = useState("");
  const [city, setCity] = useState("");
  const [info, setInfo] = useState("");
  const [reason, setReason] = useState("");
  const [value, setValue] = useState("");
  const [why, setWhy] = useState("");

  const [image, setImage] = useState("");
  const [upImage, setUpImage] = useState([]);
  const [error, setError] = useState(false)
  const [baseImage, setBaseImage] = useState("");

  const snaphsot = useRef(null);
  const errors = useRef(null);

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file);
    setBaseImage(base64)
    console.log("base64", base64)
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) =>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const onSubmit = (e) => {

    if(name.length === 0){
      setError(true)
    }if(nowa.length === 0){
      setError(true)
    }if(city.length === 0){
      setError(true)
    }if(sosmed.length === 0){
      setError(true)
    }if(info.length === 0){
      setError(true)
    }if(reason.length === 0){
      setError(true)
    }if(value.length === 0){
      setError(true)

      const getValues = async () => {
        try {
          const database = getDatabase();
          const rootReference = r(database);
          const dbGet = await get(child(rootReference, `users/${auth.currentUser.uid}`));
          const dbValue = dbGet.val();
          console.log("test", dbValue);
          snaphsot.current = dbValue;
        } catch (getError) {
          error.current = getError.message;
        }
      }
    }

      e.preventDefault()
      set(r(db, `users/${auth.currentUser.uid}`), {
        a_nama: name,
        b_nomor_WA: nowa,
        c_medsos: sosmed,
        d_kota: city,
        e_dapat_info: info,
        f_alasan_datang: reason,
        g_tahu_less_waste_event: value,
        h_penjelasan: why,
        i_absensi: "Tidak hadir",
        j_foto: baseImage,
      });
      setError(true)

    // navigate("/regis2");
    if (image == null) return;
    const imageRef = ref(storage, `images/${auth.currentUser.uid}`);
    uploadBytes(imageRef, image).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setUpImage((prev) => [...prev, url]);
      });
    });

  }  


  return (
    <div className="w-full">
      <div>
        <img className="w-full h-[1500px] md:h-[1500px] object-cover mix-blend-overlay absolute" src={imgbg2} alt="/" />
      </div>

      <div className="flex relative justify-center px-2 pt-10 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl shadow-black-400 w-[602px] md:w-[1242px] ">
          <div className="text-center">
            <h1 className="font-bold text-2xl my-6">Pendaftaran Event Ritkola Utsa</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-20 md:pt-[40px] text-black font-bold text-center sm:text-5xl">Lengkapi Data Diri Anda</h2>
          <p className="py-4 text-1xl text-[#6F6C90] text-center sm:text-2xl">Isi data diri dengan benar dan lengkap</p>
        </div>
      </div>

      <div className="flex justify-center relative gap-x-8 px-4 pt-4 sm:pt-20 text-black">
        <div className="bg-[#FAF8F8] rounded-xl shadow-2xl shadow-gray-400 w-[700px] md:w-[700px]">
          <div className="p-4">
            <h3 className="font-bold text-2xl">Contact Details</h3>
            <p className="text-gray-500 text-xl">informasi yang diberikan dapat membantu kami!</p>
            <hr />
            <div className="col-span-2 pt-8 my-10 md:pt-2">
              <Input name={"name"} title={"Nama"} placeholder={"Tulis nama anda..."} value={name} onChange={(e) => setName(e.target.value)} />
              {error&&name.length<=0?
              <ErrorMsg/>:""}
              <Input name={"nowa"} title={"No. WA"} placeholder={"Tulis nomor WhatsApp anda..."} value={nowa} onChange={(e) => setNowa(e.target.value)} />
              {error&&nowa.length<=0?
              <ErrorMsg/>:""}
              <Input name={"sosmed"} title={"Nama Social Media FB/IG"} placeholder={"Tulis Sosmed anda..."} value={sosmed} onChange={(e) => setSosmed(e.target.value)} />
              {error&&sosmed.length<=0?
              <ErrorMsg/>:""}
              <div className="p-2">
                <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Asal Kota</span>
                <form className="flex flex-col">
                  <select name="city" value={city} onChange={(e) => setCity(e.target.value)} className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                    <option>--Pilih Kota Anda--</option>
                    <option>Bitung</option>
                    <option>Kotamobagu</option>
                    <option>Manado</option>
                    <option>Minahasa</option>
                    <option>Minahasa Utara</option>
                    <option>Minahasa Selatan</option>
                    <option>Minahasa Tenggara</option>
                    <option>Lain-Lain</option>
                  </select>
                </form>
                {error&&city.length<=0?
                <ErrorMsg/>:""}
              </div>
              <div className="p-2">
                <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Tahu info RITKOLA dari mana?</span>
                <form className="flex flex-col">
                  <select name="info" value={info} onChange={(e) => setInfo(e.target.value)} className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                    <option> </option>
                    <option>Medsos</option>
                    <option>Teman</option>
                    <option>Media Cetak / Radio</option>
                    <option>Lain-lain...</option>
                  </select>
                </form>
                {error&&info.length<=0?
                <ErrorMsg/>:""}
              </div>
              <div className="p-2">
                <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Alasan mau Datang ke acara ini?</span>
                <form className="flex flex-col">
                  <select name="reason" value={reason} onChange={(e) => setReason(e.target.value)} className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                    <option> </option>
                    <option>Teman pangge sekalian cari par</option>
                    <option>Komunitas</option>
                    <option>Party Reggae</option>
                    <option>Lokal kultur dan market</option>
                    <option>Lain-lain...</option>
                  </select>
                </form>
                {error&&reason.length<=0?
                <ErrorMsg/>:""}
              </div>
              <div className="p-2">
                <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Apa pernah dengar "Less Waste Event" ?</span>
                <form className="flex flex-col">
                  <select name="value" onChange={(e) => setValue(e.target.value)} value={value} className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                    <option></option>
                    <option>Tidak</option>
                    <option value={"true"}>Pernah</option>
                  </select>
                </form>
                {error&&value.length<=0?
                <ErrorMsg/>:""}
                {value === "true" && (
                  <form>
                    <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Kalo pernah menurut ngoni apa?</span>
                    <input name="why" onChange={(e) => setWhy(e.target.value)} value={why} type="text" className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black"></input>
                  </form>
                )}
              </div>
              <div className="p-2">
                <UploadPhoto onChange={(e) => uploadImage(e)} img={baseImage}  />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center px-2 pt-10 pb-[100px] sm:pt-20 text-black">
        <button onClick={onSubmit} className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-3xl font-bold rounded-full shadow-2xl shadow-gray-300 w-[137px] h-[60px] md:w-[137px] ">
          Next
        </button>
      </div>

      <Sponsor />
    </div>
  );
};

export default Registration;