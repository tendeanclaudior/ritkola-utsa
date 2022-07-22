import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const [setData] = useState("No result");

  const navigate = useNavigate();

  return (
    <div className="flex-row">
      <div className="flex">
        <p className="text-[20px] md:text-[64px] mx-auto mt-[100px] md:mt-[187px]">Scan here</p>
      </div>
      <div className="flex">
        <div className="w-[250px] h-[350px] md:w-[859px] md:h-[1222px] bg-[#E9E9E9] rounded-3xl mt-[30px] md:mt-[72px] mb-[0px] md:mb-[285px] mx-auto">
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
                navigate("/regis-done");
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%" }}
          />
          {/* <div className="">
            <p className="text-center">{data}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Scan;
