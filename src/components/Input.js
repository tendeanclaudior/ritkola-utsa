import React from "react";

const Input = ({ title, placeholder, ...rest }) => {
  return (
    <div className="p-2">
      <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">{title}</span>
      <form className="flex flex-col">
        <input className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black" type="name" placeholder={placeholder} {...rest} />
      </form>
    </div>
  );
};

export default Input;
