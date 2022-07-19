import React from "react";
import imgbg from "../assets/images/img-bg2.png";
import btnback from "../assets/images/btn-back.png";
import Sponsor from "./Sponsor";
import { Link } from "react-router-dom";

const Registration2 = () => {
  return (
    <div className="w-full">
      <div>
        <img className="w-full h-[1500px] object-cover mix-blend-overlay absolute" src={imgbg} alt="/" />
      </div>

      <div className="flex relative justify-center px-2 pt-10 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl shadow-gray-400 w-[602px] md:w-[1242px] ">
          <div className="text-center">
            <h1 className="font-bold text-2xl my-6">Pendaftaran Even Ritkola Utsa</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative gap-x-8 px-4 pt-20 sm:pt-20 text-black">
        <div className="bg-[#FAF8F8] rounded-xl shadow-2xl shadow-gray-400 w-[700px] md:w-[700px]">
          <div className="p-4">
            <h3 className="font-bold text-2xl">Contact Details</h3>
            <p className="text-gray-500 text-xl">informasi yang diberikan dapat membantu kami!</p>
            <hr />
            <div className="col-span-2 pt-8 my-10 md:pt-2">
              <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Tahu info RITKOLA UTSA dari mana ?</span>
              <form className="flex flex-col">
                <select className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                  <option> </option>
                  <option>Medsos</option>
                  <option>Teman</option>
                  <option>Media Cetak / Radio</option>
                  <option>Lain-lain...</option>
                </select>
              </form>
              <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Alasan mau datang ke acara ini ?</span>
              <form className="flex flex-col">
                <select className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                  <option> </option>
                  <option>Teman pangge sekalian cari par</option>
                  <option>Komunitas</option>
                  <option>Party Reggae</option>
                  <option>Lokal kultur dan market</option>
                  <option>Lain-lain...</option>
                </select>
              </form>
              <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Apa pernah dengar "Less Waste Event" ?</span>
              <form className="flex flex-col">
                <select className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black">
                  <option> </option>
                  <option>Tidak</option>
                  <option>Pernah</option>
                </select>
              </form>
            </div>
          </div>

          <div></div>

          <div className="flex justify-between relative  px-2 pt-10 pb-[100px] sm:pt-20 text-black">
            <img className="px-[10px] md:px-[65px]" src={btnback} alt="#" />
            <div className="px-[10px] md:px-[65px]">
              <Link to="/regis3">
              <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-2xl font-bold rounded-full shadow-md shadow-gray-600 w-[137px] h-[60px] md:w-[137px] justify-end">Next</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[259px]">
        <Sponsor />
      </div>
    </div>
  );
};

export default Registration2;
