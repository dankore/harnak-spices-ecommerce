import React from "react";

function Header() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-2xl mx-auto shaodow-xl flex justify-between items-center px-4">
        <div>Harnak Spices</div>
        <div className="flex items-center">
          <div className="mr-3">Login</div>
          <div className="bg-black px-3 py-1 text-white">Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
