import React from "react";

// import imgbg from "../assets/images/img-bg.png";
import imgbg2 from "../assets/images/img-bg2.png";

import { CloudUploadIcon } from "@heroicons/react/solid";
import Sponsor from "./Sponsor";
import { Link } from "react-router-dom";

function Registration() {
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
              <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Nama</span>
              <form className="flex flex-col">
                <input className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black" type="name" placeholder="Tulis nama lengkap anda..." />
              </form>
              <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">No.WA</span>
              <form className="flex flex-col">
                <input className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black" type="name" placeholder="Tulis nomor whatsapp anda..." />
              </form>
              <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Asal Kota</span>
              <form className="flex flex-col">
                <select className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
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
              <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Nama Social Media FB/IG</span>
              <form className="flex flex-col">
                <input className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black" type="name" placeholder="Tulis sosmed anda..." />
              </form>
              <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Upload Photo</span>
              {/* <form className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img className="h-16 w-16 object-cover rounded-full" src={imgbg} alt="uploadphoto" />
                </div>
                <label className="block">
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
                               file:mr-4 file:py-2 file:px-4
                               file:rounded-full file:border-0
                               file:text-sm file:font-semibold file:bg-gradient-to-b
                               file:from-[#165E00] file:via-[#FFDD00] file:to-[#FF0000] file:text-black
                               hover:file:bg-white"
                  />
                </label>
              </form> */}
              <div className="bg-white w-[284px] h-16 p-2 mr-4">
                <div className="">
                  <p className="flex py-2 text-gray-400">
                    <CloudUploadIcon className="w-8 mr-5 text-black" />
                    Unggah File
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center px-2 pt-10 pb-[100px] sm:pt-20 text-black">
        <Link to="/regis2">
        <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-3xl font-bold rounded-full shadow-2xl shadow-gray-300 w-[137px] h-[60px] md:w-[137px] ">Next</button>
        </Link>
      </div>

      <Sponsor />
    </div>
  );
}

export default Registration;
