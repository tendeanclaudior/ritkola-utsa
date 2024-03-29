import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Bgimg from "../assets/images/img-bg2.png";
import Logo from "../assets/Logo/Logo.png";
import { ref as r, update } from "firebase/database";
import { db, auth } from "../firebase";

const List = () => {
  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logOut } = UserAuth();

  const handleSubmit = () => {
    logOut()
    try { 
      signUp(email, password);
      navigate('/regis');
    } catch (error) {
      navigate('/list')
      alert("Email telah digunakan")
    }
    update(r(db, `users/${auth.currentUser.uid}`), {
      k_complete: false,
    });
  };

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
          <form onSubmit={handleSubmit} className="max-w-[360px] md:max-w-[400px] w-full mx-auto bg-[#F6F6F6] p-8 px-8 rounded-lg shadow-xl">
            <h2 className="text-3xl text-black font-medium text-center">Daftar</h2>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} className="rounded-lg mt-2 p-2 border border-black" type="email" placeholder="Tulis email anda..." />
              <p className="text-gray-400 text-xs pt-1">
                Masukan email yang sudah terdaftar di <span className="text-red-500">G-Mail</span>
              </p>
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} className="rounded-lg mt-2 p-2 border border-black" type="password" placeholder="Tulis password anda..." />
              <p className="text-gray-400 text-xs pt-1">
                Masukan password minimal 6 karakter
              </p>
            </div>
            <div className="text-center pt-[16px]">
              <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-2xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[137px] h-[60px] md:w-[137px] ">Daftar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default List;
