import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom'
import "./index.css";

export default function LoginScreen() { 
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const localData = localStorage.getItem("listUser");
  let listUser = localData ? JSON.parse(localData) : [];
  
  return (
    <div className="gradient">
      <div className="login-container">
        <img
          src="https://img.freepik.com/premium-vector/web-development-seo-icon-illustration-desktop-stationery-gear-technology-icon-white-isolated_138676-398.jpg?w=2000"
          alt="coputer-icon"
        />
        <div className="login-form">
          <h1 className="mb-24 text-7xl font-semibold font-head-style">
            Sign in
          </h1>
          <form className="flex-col">
            <label className="text-zinc-600 font-semibold underline font-head-style">
              Nick Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Tên người dùng"
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <button
            className="w-24 h-24 bg-red-200"
            onClick={() => {
              let user = {
                id: listUser.length + 1,
                name: name,
              };
              let newListUser = [...listUser, user];
              localStorage.setItem("listUser", JSON.stringify(newListUser));
              sessionStorage.setItem("userName", JSON.stringify(name));
              console.log(name);
              navigate("/chat");
            }}
          >
            Join Chat
          </button>
        </div>
      </div>
    </div>
  );
}
