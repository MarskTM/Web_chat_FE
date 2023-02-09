import React, { useEffect, useState } from "react";
import GuessMessage, { OwnMessage } from "./item_message";
import { FaRegPaperPlane } from "react-icons/fa";

export default function Messages() {
  const [messg, setMessg] = useState({});
  const userName = sessionStorage.getItem("userName");
  const localData = localStorage.getItem("listMess");
  let listMess = JSON.parse(localData) || [];

  return (
    <div className="w-4/5 bg-blue-100 rounded-r-md">
      {/* Avata Onw Client */}
      <div className="w-full h-20 rounded-r-m shadow-md shadow-indigo-500/40 bg-blue-200 flex justify-center items-center">
        {/* <img
          className="w-14 h-14 mr-4"
          src="https://cdn-icons-png.flaticon.com/512/146/146037.png"
          alt="Person Image"
        /> */}
        <div className="w-3/4">
          <h2 className="text-xl font-semibold font-head-style">Chat Tổng</h2>
          <p className="text-sm font-head-style">Started</p>
        </div>
      </div>

      {/* Messages */}
      <div>
        <div
          className="bg-red-200"
          style={{ height: 500, maxHeight: 500, overflowY: "scroll" }}
        >
          {listMess.map((item, index) => {
            if (item.name === userName) {
              return (
                <OwnMessage key={index} message={item.mess} time={item.time} />
              );
            } else {
              return (
                <GuessMessage
                  key={index}
                  message={item.mess}
                  time={item.time}
                />
              );
            }
          })}
          {/* <GuessMessage data={"hello Linh ngo"} />
          <OwnMessage data={"test"} /> */}
        </div>

        {/* Input for the messages */}
        <div className="fixed top-3/4 w-2/5 flex justify-center items-center">
          <button
            className="w-12 p-2 h-14 rounded-md bg-gray-300 hover:bg-gray-400"
            onClick={() => {
              listMess = [...listMess, messg];
              localStorage.setItem("listMess", JSON.stringify(listMess));
            }}
          >
            <FaRegPaperPlane size={30} />
          </button>
          <input
            type="text"
            className="ml-2 w-4/5 h-14 p-2 rounded-md"
            onChange={(e) => {
              setMessg({
                id: listMess.length + 1,
                name: userName,
                mess: e.target.value,
                time: new Date().toLocaleTimeString(),
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
