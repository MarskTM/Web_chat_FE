import React from "react";

export default function GuessMessage({ message, time}) {
  return (
    <div className="mt-2 p-2 flex flex-col items-start">
      <div className="flex items-center">
        <p className="text-md">{time}</p>
      </div>

      <div className="min-h-16 mt-2 flex items-center ">
        <img
          className="w-14 h-14 mr-2 rounded-full"
          src="https://img.freepik.com/premium-vector/back-school-cartoon-boy-student-showing-fingers-up_46527-623.jpg"
          alt="Person Chat"
        ></img>
        <p className="min-h-16 p-5 max-w-2xl bg-slate-300 shadow-lg rounded-md">
          {message}
        </p>
      </div>
    </div>
  );
}

function OwnMessage({ message, time }) {
  return (
    <div className="mt-2 p-2 flex flex-col items-end">
      <div className="flex items-center">
        <p className="text-md">{time}</p>
      </div>
      <div className="min-h-16 mt-2 flex items-center shadow-lg">
        <p className="min-h-16 p-5 max-w-2xl bg-slate-300 rounded-md">
          {message}
        </p>
      </div>
    </div>
  );
}

export { OwnMessage };
