import React from "react";

const Input = ({ title, placeholder, onChange, name, value, required, ...rest }) => {
  return (
    <div className="pt-5">
      <span className="block font-bold mb-1 text-black after:content-['*'] after:text-red-500 after:ml-0.5">{title}</span>
      <form className="flex flex-col">
        <input onChange={onChange} name={name} value={value} className="w-[284px] h-16 p-2 mr-4 rounded-full  text-black" type="name" placeholder={placeholder} {...rest} required={required} />
      </form>
    </div>
  );
};

export default Input;
