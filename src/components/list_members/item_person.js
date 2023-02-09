import React, { useState } from "react";

export default function Person({name, src}) {
  
  return (
    <div onClick={() => {
      localStorage.setItem("user_name", name);
    }}>
      <div className="w-4/5 h-20 m-auto pr-8 rounded-full hover:bg-red-200 flex justify-center items-center">
        <img
          className="w-14 h-14 mr-4"
          src={src}
          alt="Person Image"
        />
        <div className="w-3/4">
          <h2 className="text-xl font-semibold font-head-style">
            {name}
          </h2>
          <p className="text-sm font-head-style">Online</p> 
        </div>
      </div>
    </div>
  );
}
