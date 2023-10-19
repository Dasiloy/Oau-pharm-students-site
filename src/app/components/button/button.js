import React from "react";

function Button({ text, displayProperties }) {
  return (
    <div>
      <button
        className={`flex ${displayProperties} w-44 rounded-lg  shadow-lg `}
      >
        <h1 className="p-5 m-auto ">{text}</h1>
      </button>
    </div>
  );
}

export default Button;
