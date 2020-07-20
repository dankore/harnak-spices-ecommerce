import React from "react";

function Header() {
  return (
    <div className="w-full bg-black text-white py-1">
      <div className="max-w-2xl mx-auto shaodow-xl flex justify-between items-center px-4">
        <div className='flex items-center'>
          <img className='w-32 mr-2' src='./images/logo.PNG' />
        </div>
        <div className="flex items-center">
          <div className="mr-3">Login</div>
          <div className="bg-black px-3 py-1">Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
