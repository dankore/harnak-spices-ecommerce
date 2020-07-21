import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-black py-1">
      <div className="mx-auto shaodow-xl flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img className="w-32 mr-2" src="./images/logo.png" />
        </Link>
        <input className="pl-2 py-1" type="text" placeholder="Search..." />
        <div className="flex items-center text-white">
          <div className="mr-3">
            Call, Text, WhatsApp me @ +234 803 404 2781
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
