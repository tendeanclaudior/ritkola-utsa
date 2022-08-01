import React, { useEffect, useRef, useState } from "react";

import background from "../assets/images/img-bg2.png";
import kupon from "../assets/images/kupon.png";
import idcard from "../assets/images/idcard.png";
import Sponsor from "./Sponsor";
import { useParams } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import { auth } from "../firebase";

const RegisDone = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const snaphsot = useRef(null);
  const error = useRef(null);

  const getValues = async () => {
    try {
      const database = getDatabase();
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, `users/${auth.currentUser.uid}`));
      const dbValue = dbGet.val();
      console.log("test", dbValue);
      snaphsot.current = dbValue;
    } catch (getError) {
      error.current = getError.message;
    }
    setIsLoading(false);
  };
  

  useEffect(() => {
    getValues();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center pt-[300px]">
        <p className="text-4xl">memproses data...</p>
      </div>
    );
  }

  const users = snaphsot.current;
  const data = Object.values(users);
  const name = data[0];
  console.log({ users, data });

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };
  console.log(data[0])

  return (
    <div>
      <div className="flex">
        <div>
          <img src={background} alt="/" className="w-full md:h-[1800px] object-cover mix-blend-overlay absolute" />
        </div>
        <div className="w-[320px] h-[634px] md:w-[860px] md:h-[1214px] relative bg-[#FAF8F8] mx-auto mt-[100px] md:mt-[305px] rounded-3xl">
          <div className="w-[200px] h-[200px] md:w-[450px] md:h-[450px] bg-white mx-auto mt-[62px] pt-[65px] md:pt-[128px] rounded-full ">
            {/* {image.map((url) => {
              return <img src={url} alt="/" className="w-[70px] h-[70px] md:w-[200px] md:h-[200px] mx-auto rounded-full" />;
            })} */}
          </div>
          <div>
            <div className="flex flex-direction:row mt-[60px] md:mt-[98px] ml-[60px] md:ml-[238px]">
              <img src={idcard} alt="/" className="w-[52px] h-[39px] md:w-[106px] md:h-[78px] mr-[22px] md:mr-[44px]" />
              {/* {data.map((item) => {
                return (
                  <div key={item[0]}>
                    <h1 className="text-[20px] md:text-[40px] mt-[8px] md:mt-[15px]">{item[0]}</h1>
                  </div>
                ); 
              })} */}
              <h1 className="text-[20px] md:text-[40px] mt-[8px] md:mt-[15px]">{truncateString(name, 10)} . . .</h1>
            </div>
              
            <div className="flex flex-direction:row ml-[65px] md:ml-[248px]">
              <img src={kupon} alt="/" className="w-[42px] h-[18px] md:w-[85px] md:h-[37px] mt-[30px] md:mt-[61px] mr-[28px] md:mr-[55px]" />
              <h1 className="text-[20px] md:text-[40px] mt-[24px] md:mt-[47px]">{truncateString(id, 8)}</h1>
            </div>
          </div>
          <div className="text-center text-[15px] md:text-[40px] mt-[100px] md:mt-[165px]">
            <p>Terima Kasih sudah menjadi bagian dari</p>
            <p>Ritkola Utsa dan sudah mensupport</p>
            <p>ekosistem ekonomi kreatif</p>
            <p>MINAHASA UTARA</p>
          </div>
        </div>
      </div>
      <div className="mt-[149px]">
        <Sponsor />
      </div>
    </div>
  );
};
export default RegisDone;