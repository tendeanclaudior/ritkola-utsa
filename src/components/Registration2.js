import React, { useEffect } from 'react'
import { db, auth } from "../firebase";
import { ref as r, update } from "firebase/database";
import backgrond from '../assets/images/img-bg2.png'
import ceklist from '../assets/images/ceklist.png'
import Sponsor from './Sponsor'
import qrcode from '../assets/images/qrcode.png'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Registration2 = () => {

    const {logOut} = UserAuth();

    useEffect(() => {
        update(r(db, `users/${auth.currentUser.uid}`), {
            k_complete: true,
        });
    }, []);

    const keluar = () => {
        logOut()
    }

  return (
    <>
    <div>
        <div className='flex'>
            <div>
                <img src={backgrond} alt="/" className='w-full md:h-[1800px] object-cover mix-blend-overlay absolute' />
            </div>
            <div className=' w-[300px] h-[500px] md:w-[1088px] md:h-[1660px] bg-[#EFF0F6] shadow-xl shadow-gray-400 relative rounded-3xl mx-auto mt-[40px] md:mt-[109px]'>
                <div className='flex mt-[60px] md:mt-[231px]'>
                    <p className='text-[20px] md:text-[60px] mx-auto'>Registrasi Berhasil!</p>
                </div>
                <div className='flex mt-[50px] md:mt-[189px]'>
                    <img src={ceklist} alt="ceklist" className='h-[100px] w-[100px] md:h-[263px] md:w-[263px] mx-auto'/>
                </div>
                <div className='text-center text-[13px] md:text-[40px] mt-[50px] md:mt-[261px]'>
                    <p>Terima Kasih sudah menjadi bagian dari</p>
                    <p>Ritkola Utsa dan sudah mensupport</p>
                    <p>ekosistem ekonomi kreatif</p>
                    <p>MINAHASA  UTARA</p>
                </div>
                <div className='mt-[70px] md:mt-[178px] flex justify-between mr-[30px] md:mr-[70px]'>
                <button className='pl-[20px]' onClick={keluar}><p className='bg-red-700 py-1 px-2 rounded-lg text-white'>Logout</p></button>
                <Link to="/Scan">
                    <img src={qrcode} alt="QR Code" className='w-[40px] h-[40px] md:w-[123px] md:h-[123px]' />
                </Link>
                </div>
            </div>
        </div>
        <div className='mt-[80px] md:mt-[197px]'>
            <Sponsor />
        </div>
    </div>
    </>
  )
}

export default Registration2