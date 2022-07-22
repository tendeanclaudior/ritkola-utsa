import React, { useState } from "react";

// import imgbg from "../assets/images/img-bg.png";
import imgbg2 from "../assets/images/img-bg2.png";

import Sponsor from "./Sponsor";
import { useNavigate } from "react-router-dom";
import UploadPhoto from "./UploadPhoto";
import Input from "./Input";

const Registration = () => {
  const [name, setName] = useState("");
  const [nowa, setNowa] = useState("");
  const [sosmed, setSosmed] = useState("");
  const [city, setCity] = useState("");

  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("title", name);
    console.log("nowa", nowa);
    console.log("sosmed", sosmed);
    console.log("city", city);
    console.log("image", image);
    navigate("/regis2");
  };

  const onUploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };
  return (
    <div className="w-full">
      <div>
        <img className="w-full h-[1500px] md:h-[1500px] object-cover mix-blend-overlay absolute" src={imgbg2} alt="/" />
      </div>

      <div className="flex relative justify-center px-2 pt-10 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl shadow-black-400 w-[602px] md:w-[1242px] ">
          <div className="text-center">
            <h1 className="font-bold text-2xl my-6">Pendaftaran Even Ritkola Utsa</h1>
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
              <Input title={"Nama"} placeholder={"Tulis nama anda..."} value={name} onChange={(e) => setName(e.target.value)} />
              <Input title={"No. WA"} placeholder={"Tulis nomor WhatsApp anda..."} value={nowa} onChange={(e) => setNowa(e.target.value)} />
              <div className="p-2">
                <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Asal Kota</span>
                <form className="flex flex-col">
                  <select value={city} onChange={(e) => setCity(e.target.value)} className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
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
              </div>
              <Input title={"Nama Social Media FB/IG"} placeholder={"Tulis Sosmed anda..."} value={sosmed} onChange={(e) => setSosmed(e.target.value)} />
              <div className="p-2">
                <UploadPhoto onChange={(e) => onUploadImage(e)} img={imagePreview} />
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
