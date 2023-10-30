import React from "react";

function Header({title}) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-lg md:text-2xl lg:text-4xl font-extrabold text-center">{title}</div>
    </div>
  );
}

export default Header;
