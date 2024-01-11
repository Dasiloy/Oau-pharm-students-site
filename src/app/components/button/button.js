import React from "react";

function Button({ text, displayProperties }) {
  return (
    <div>
      <button
        className={`flex ${displayProperties} w-44 rounded-lg  shadow-lg `}
      >
        <h1 className="lg:p-5 p-4 m-auto text-sm lg:text-md  ">{text}</h1>
      </button>
    </div>
  );
}

export default Button;
