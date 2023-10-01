import React from "react";

const Button = (props) => {
  const { register, signUp, logIn, getStarted, url } = props.btn;
  return (
    <div>
      <button className="bg-indigo-800 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-600 duration-500 md:my-0 my-3">
        <a href={url}>{register}</a>
        <a href={url}>{getStarted}</a>
      </button>
    </div>
  );
};

export default Button;
