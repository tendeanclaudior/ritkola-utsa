import React from "react";
import { Link } from "react-router-dom";

import Bgimg from "../assets/images/img-bg2.png";
import Logo from "../assets/Logo/Logo.png";

const Login = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={Bgimg} alt="" />
        </div>

        <div className="bg-[#ffffff] flex flex-col justify-center">
          <div>
            <img className="md:ml-[150px] mx-auto" src={Logo} alt="" />
          </div>
          <form className="max-w-[360px] md:max-w-[400px] w-full mx-auto bg-[#F6F6F6] p-8 px-8 rounded-lg shadow-xl">
            <h2 className="text-3xl text-black font-medium text-center">Masuk</h2>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input className="rounded-lg mt-2 p-2 border border-black" type="email" placeholder="Tulis email anda..." />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input className="rounded-lg mt-2 p-2 border border-black" type="password" placeholder="Tulis password anda..." />
            </div>
            <div className="flex justify-between pt-[16px]">
              <Link to="/regis">
                <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-2xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[137px] h-[60px] md:w-[137px] ">Masuk</button>
              </Link>
              <Link to="/list">
                <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-2xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[137px] h-[60px] md:w-[137px] ">Daftar</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
