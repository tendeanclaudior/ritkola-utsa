import React from "react";

// import imgprofile from "../assets/images/Logo-Unklab.png";

const UploadPhoto = ({ img, ...rest }) => {
  return (
    <div className="p-2">
      <span className="block font-bold mb-1 pt-5 text-black after:content-['*'] after:text-red-500 after:ml-0.5">Upload Photo</span>
      <form className="flex items-center space-x-6">
        <div className="shrink-0">{img && <img className="h-16 w-16 object-cover rounded-full" src={img} alt="/" />}</div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            {...rest}
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
          file:bg-gray-400 file:text-black
          hover:file:bg-white"
          />
        </label>
      </form>
    </div>
  );
};

export default UploadPhoto;
