import React from "react";

import LogoFik from "../assets/images/Logo-Fik.png";
import LogoMinut from "../assets/images/Logo-Minut.png";
import LogoBaciraro from "../assets/images/Logo-Baciraro.png";
import LogoUnklab from "../assets/images/Logo-Unklab.png";

import LogoEco from "../assets/Logo/Logo-Eco.png";
import LogoCofBeng from "../assets/Logo/Logo-CoffBeng.png";
import LogoChip from "../assets/Logo/Logo-Chip.png";
import LogoShoes from "../assets/Logo/Logo-Shoes.png";
import LogoOlk from "../assets/Logo/Logo-Olk.png";
import LogoP from "../assets/Logo/Logo-P.png";
import LogoKis from "../assets/Logo/Logo-Kis.png";
import LogoAbon from "../assets/Logo/Logo-Abon.png";

import LogoInblood from "../assets/Logo/Logo-inblod.png";
import LogoBengkel from "../assets/Logo/Logo-Bengkel.png";
import LogoReid from "../assets/Logo/Logo-Reid.png";
import LogoThe from "../assets/Logo/Logo-The.png";
import LogoWonder from "../assets/Logo/Logo-Wonder.png";
import LogoGreat from "../assets/Logo/Logo-Great.png";
import LogoLikupang from "../assets/Logo/Logo-Likupan.png";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AtSymbolIcon } from "@heroicons/react/solid";

function Sponsor() {
  return (
    <div>
      <div className="w-full h-[400px] md:h-[450px] bg-red-800 relative">
        <div className="py-20 md:py-13">
          <div className="flex justify-center">
            <div>
              <img src={LogoMinut} alt="logo" className="w-24 mr-5" />
            </div>
            <div>
              <img src={LogoBaciraro} alt="logo" className="w-24 mr-5" />
            </div>
            <div>
              <img src={LogoFik} alt="logo" className="w-20 mr-5" />
            </div>
            <div>
              <img src={LogoUnklab} alt="logo" className="w-24 mr-2" />
            </div>
          </div>
          <div className="py-[20px] md:py-12">
            <div className="flex justify-center">
              <div>
                <img src={LogoEco} alt="logo" className="w-[50px] ml-1 mr-3" />
              </div>
              <div>
                <img src={LogoCofBeng} alt="logo" className="w-[60px]" />
              </div>
              <div>
                <img src={LogoChip} alt="logo" className="w-[60px]" />
              </div>
              <div>
                <img src={LogoShoes} alt="logo" className="mr-2" />
              </div>
              <div>
                <img src={LogoOlk} alt="logo" className="mr-2" />
              </div>
              <div>
                <img src={LogoP} alt="logo" className="w-[40px] mr-2" />
              </div>
              <div>
                <img src={LogoKis} alt="logo" className="mr-2" />
              </div>
              <div>
                <img src={LogoAbon} alt="logo" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <div>
                <img src={LogoInblood} alt="logo" className="w-[70px] md:w-[120px]  mr-3" />
              </div>
              <div>
                <img src={LogoBengkel} alt="logo" className="w-[70px] md:w-[120px] ml-1 mr-3" />
              </div>
              <div>
                <img src={LogoReid} alt="logo" className="w-[50px] md:w-[80px] ml-2 mr-3" />
              </div>
              <div>
                <img src={LogoThe} alt="logo" className="w-[60px] md:w-[85px] ml-2 mr-3" />
              </div>
              <div>
                <img src={LogoWonder} alt="logo" className="w-[85px] md:w-[120px] ml-2 mr-3" />
              </div>
              <div>
                <img src={LogoGreat} alt="logo" className="w-[30px] md:w-[40px] mr-3" />
              </div>
              <div>
                <img src={LogoLikupang} alt="logo" className="w-[50px] md:w-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Footer--> */}
      <div className="pt-8 pl-5 bg-[#165E0080] h-[80px] sm:h-full sm:pl-16 sm:py-14">
        <div className="flex px-2 mr-5 justify-between text-center text-black">
          <h2 className="flex font-encode text-md sm:text-3xl">
            <AtSymbolIcon className="w-5 md:w-7 mr-1" /> 2022 PT. KTP FIK UNKLAB
          </h2>
          <div className="flex justify-between w-[70px] sm:w-[70px] md:pt-3 text-2xl">
            <a href="https://www.facebook.com/unklabfik" target="{_blank}">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/officialfikunklab" target="{_blank}">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* <!--Akhir Footer--> */}
    </div>
  );
}

export default Sponsor;
