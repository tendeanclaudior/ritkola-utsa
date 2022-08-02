import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Bgimg from "../assets/images/img-bg2.png";
import Logo from "../assets/Logo/Logo.png";

import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UseTimeout from "../components/UseTimeout";


import { getDatabase, ref, child, get } from "firebase/database";
import { auth } from "../firebase";


const Login = () => {
  const { logIn} = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cek, setCek] = useState(true);
  console.log(cek)
  const navigate = useNavigate();
  const [errors, setErrors] = useState("")
  
  const { logOut } = UserAuth();

    // UseTimeout(() => 
    // logOut(), 0)
    
  const snaphsot = useRef(null);
  const error = useRef(null);

  

    //test
    const getValues = async () => {
      try {
        const database = getDatabase();
        const rootReference = ref(database);
        const dbGet = await get(child(rootReference, "users"));
        const dbValue = dbGet.val();
        console.log("test", dbValue);
        snaphsot.current = dbValue;
      } catch (getError) {
        error.current = getError.message;
      }

    };
    
    useEffect(() => {
      getValues();
    }, []);
  
    const users = snaphsot.current;
    
    // const data = Object.values(users);

    if(users==""){
      setCek(false)
    }
    console.log("after",cek)
  
    // if(!cek) {
    //   navigate("/regis")
    // }
    // sampe sini

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/regis2") //ini yang mo rubah
    } catch (error) {
      console.log(error);
      setErrors("Password salah")
    }
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
            <h2 className="text-3xl text-black font-medium text-center">Masuk</h2>
            <div className="flex flex-col py-2">
              <label className="after:content-['*'] after:text-red-500 after:ml-0.5">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} className="rounded-lg mt-2 p-2 border border-black text-black invalid:text-red-500 peer" type="email" placeholder="Tulis email anda..." />
              <p className="text-sm text-red-500 invisible peer-invalid:visible">Email tidak valid</p>
            </div>
            <div className="flex flex-col py-1">
              <label className="after:content-['*'] after:text-red-500 after:ml-0.5">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} className="rounded-lg mt-2 p-2 border border-black" type="password" placeholder="Tulis password anda..." />
            </div>
            {errors ? <p className="mt-[1px] mb-5 text-sm text-red-600">{errors}</p> : null}
            <Link to="/forgetpass">
              <p className="text-gray-500 underline">Forget Password</p>
            </Link>
            <div className="flex justify-between pt-[16px]">
              <button className="bg-gradient-to-b from-[#165E00] via-[#FFDD00] to-[#FF0000] text-white text-2xl font-bold rounded-lg shadow-2xl shadow-gray-300 w-[137px] h-[60px] md:w-[137px] ">Masuk</button>
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
