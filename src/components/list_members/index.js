import React from "react";
import Person from "./item_person";
import { FaSistrix } from "react-icons/fa";

const listAvatar = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/512/5556/5556529.png",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
  },
  {
    id: 3,
    src: "https://cdn-icons-png.flaticon.com/512/5556/5556558.png",
  },
  {
    id: 4,
    src: "https://cdn0.iconfinder.com/data/icons/avatar-78/128/3-512.png",
  },
];

const randomAvatar = () => {
  let random = Math.floor(Math.random() * listAvatar.length);
  console.log(listAvatar[random].src);
  return listAvatar[random].src;
};

export default function Members() {
  const localData = localStorage.getItem("listUser");
  let listUser = localData ? JSON.parse(localData) : [];

  return (
    <div className="w-2/5 bg-red-100 rounded-l-md">
      <div className="w-64 h-12 mt-10 m-auto bg-blue-100 rounded-md flex justify-center items-center">
        <button className="w-10 h-10 hover:bg-slate-400 bg-slate-200 rounded-l-md flex justify-center items-center">
          <FaSistrix size={22} />
        </button>
        <input
          className="h-10 pl-2 pr-2 rounded-r-md"
          type="text"
          placeholder="Search . . ."
        />
      </div>

      <div className="mt-8 border-t-4 border-neutral-400" style={{height: 580, maxHeight: 600, overflowY: 'scroll'}}>
        {listUser.map((user) => {
          return <Person key={user.id} name={user.name} src={randomAvatar()} />;
        })}
      </div>
    </div>
  );
}
