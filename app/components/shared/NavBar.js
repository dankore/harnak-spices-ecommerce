import React, { useContext } from 'react';
import DispatchContext from '../../contextsProviders/DispatchContext';
import StateContext from '../../contextsProviders/StateContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const logo =
    'https://res.cloudinary.com/dankoresoftware/image/upload/w_400,f_auto/v1685897491/harnak/harnak-foods-logo.jpg';
  // const logo =
  //     'https://res.cloudinary.com/my-nigerian-projects/image/upload/w_400,f_auto/v1596194518/har/logo.png',
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <nav>
      <div className="bg-white border-b custom-shadow-nav w-full top-0 fixed z-10">
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-2 lg:px-6">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* <!-- Mobile menu button--> */}
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                  onClick={() => appDispatch({ type: 'toggleHamburgerMenu' })}
                >
                  {/* HAMBURGER MENU */}
                  {!appState?.toggleHamburgerMenu && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                  {/* X MENU */}
                  {appState?.toggleHamburgerMenu && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <Link to="/" className="flex-shrink-0">
                  <img
                    className="block lg:hidden h-10 w-auto rounded-lg"
                    src={logo}
                    alt="Harnak Foods logo"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto rounded-lg"
                    src={logo}
                    alt="Harnak Foods logo"
                  />
                </Link>

                <div className="hidden my-auto lg:block lg:mx-auto text-sm">
                  <div className="flex items-center">
                    <p className="text-red-700 font-bold italic">Order Now:</p>
                    <a
                      href="https://chat.whatsapp.com/Clrq9WlqBjnEdPrgMbxyt8"
                      className="mx-3 flex py-1 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
                    >
                      <i className="text-3xl text-green-500 mr-2 fab fa-whatsapp-square"></i>
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://www.facebook.com/messages/t/harnaks"
                      className="mr-3 flex py-1 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
                    >
                      <i className="text-3xl text-blue-500 mr-2 fab fa-facebook-square"></i>
                      <span>Facebook</span>
                    </a>
                    <a
                      href="mailto:harnakspices@gmail.com"
                      className="mr-3 flex py-1 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
                    >
                      <i className="text-3xl text-gray-700 mr-2 fas fa-envelope"></i>
                      <span>harnakspices@gmail.com</span>
                    </a>
                    <a
                      href="tel:+2348034042781"
                      className="flex py-1 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
                    >
                      <i className="text-3xl text-gray-700 mr-2 fas fa-phone-square"></i>
                      <span>+234(0)803 404 2781</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-sm absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <div className="block lg:hidden relative">
                  <Link
                    to="/basket"
                    onClick={() => appDispatch({ type: 'turnOff' })}
                    className="text-center active:bg-gray-300 px-2 py-1 block hover:bg-gray-200"
                  >
                    <i className="text-2xl text-gray-700 fas fa-shopping-basket"></i>
                    <span className="block text-red-600">
                      {' '}
                      {appState?.basket.length > 0 ? appState?.basket.length : ''}
                    </span>
                  </Link>
                </div>
                {/*  PROFILE DROPDOWN */}
                <div className="ml-3 relative hidden lg:block">
                  <div className="flex items-center">
                    <Link
                      to="/basket"
                      className="flex items-center mr-3 relative active:bg-gray-300 px-2 py-1 hover:bg-gray-200"
                    >
                      <i className="text-3xl text-gray-700 mr-2 fas fa-shopping-basket"></i>
                      <span className="absolute text-red-600 ml-8 -mt-5">
                        {appState?.basket.length > 0 ? appState?.basket.length : ''}
                      </span>
                    </Link>
                    <div className="flex items-center hidden xl:flex">
                      <i className="text-3xl text-gray-700 mr-2 fas fa-globe-africa"></i>
                      <span> Suleja, Niger State</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {appState?.toggleHamburgerMenu && (
            <div
              style={{ zIndex: 2 }}
              className="block lg:hidden absolute bg-white inset-x-0 h-screen"
            >
              <div className="pt-2 pb-3">
                <a
                  href="https://chat.whatsapp.com/Clrq9WlqBjnEdPrgMbxyt8"
                  className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                >
                  <i className="text-4xl text-green-500 mr-2 fab fa-whatsapp-square"></i>
                  <span>Order on WhatsApp</span>
                </a>
                <a
                  href="https://www.facebook.com/messages/t/harnaks"
                  className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                >
                  <i className="text-4xl text-blue-500 mr-2 fab fa-facebook-square"></i>
                  <span>Order on Facebook</span>
                </a>
                <a
                  href="mailto:harnakspices@gmail.com"
                  className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                >
                  <i
                    style={{ fontSize: `${2.1}rem` }}
                    className="text-4xl text-gray-700 mr-2 fas fa-envelope"
                  ></i>
                  <span>Order by Email: harnakspices@gmail.com</span>
                </a>
                <a
                  href="tel:+2348034042781"
                  className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                >
                  <i className="text-4xl text-gray-700 mr-2 fas fa-phone-square"></i>
                  <span>Order by Call: +234(0)803 404 2781</span>
                </a>
                <div className="pl-4 pt-1 pb-1 flex items-center">
                  <i className="text-4xl lg:text-4xl text-gray-700 mr-2 fas fa-globe-africa"></i>
                  <span> Suleja, Niger State</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-16 bg-gray-200 space-x-5">
        <Link className="flex py-3 px-2 items-center active:bg-gray-300 hover:bg-gray-200" to="/">
          <i className="text-3xl text-gray-700 mr-2 fas fa-home"></i>
          Home
        </Link>
        <Link
          className="flex py-3 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
          to="/about"
        >
          <i className="text-3xl text-gray-700 mr-2 far fa-address-card"></i>
          About Harnak Foods
        </Link>

        <Link
          className="flex py-3 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
          to="/branches"
        >
          <i className="text-3xl text-gray-700 mr-2 fas fa-map-pin"></i>
          Branches
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
