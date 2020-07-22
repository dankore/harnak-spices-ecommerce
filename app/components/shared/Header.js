import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="w-full bg-white py-1">
      <div className="mx-auto shaodow-xl flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img className="w-32 mr-2" src="./images/logo2.png" />
        </Link>

        <div className="flex items-center ">
          <div className="mr-3 flex items-center">
            <i className="text-4xl text-green-500 mr-2 fab fa-whatsapp-square"></i>
            <span>Order on WhatsApp</span>
          </div>
          <div className="mr-3 flex items-center">
            <i className="text-4xl text-blue-500 mr-2 fab fa-facebook-square"></i>
            <span>Order on Facebook</span>
          </div>
          <div className="mr-3 flex items-center">
            <i className="text-4xl mr-2 fas fa-phone-square"></i>
            <span>Order by Call: +234 803 404 2781</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
