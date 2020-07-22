import React, { useContext } from 'react';
import DispatchContext from '../../contextsProviders/DispatchContext';
import StateContext from '../../contextsProviders/StateContext';

function Navbar() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <nav className="bg-white relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => appDispatch({ type: 'toggleHamburgerMenu' })}
            >
              {/* HAMBURGER MENU */}
              {!appState.toggleHamburgerMenu && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
              {/* X MENU */}
              {appState.toggleHamburgerMenu && (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-8 w-auto"
                src="./images/logo2.png"
                alt="Harnak Spices logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="./images/logo2.png"
                alt="Harnak Spices logo"
              />
            </div>

            <div className="hidden sm:block sm:mx-auto">
              <div className="flex">
                <div className="mr-3 flex items-center">
                  <i className="text-4xl text-green-500 mr-2 fab fa-whatsapp-square"></i>
                  <span>Order on WhatsApp!!</span>
                </div>
                <div className="mr-3 flex items-center">
                  <i className="text-4xl text-blue-500 mr-2 fab fa-facebook-square"></i>
                  <span>Order on Facebook</span>
                </div>
                <div className="mr-3 flex items-center">
                  <i className="text-4xl mr-2 fas fa-phone-square"></i>
                  <span>Order by Call: +234(0)803 404 2781</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={() => appDispatch({ type: 'toggleProfileDropdown' })}
                >
                  <i className="far fa-user-circle text-3xl"></i>
                </button>
              </div>
              {appState.toggleProfileDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div
                    className="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {appState.toggleHamburgerMenu && (
        <div className="block sm:hidden absolute bg-white inset-x-0 h-screen">
          <div className="px-2 pt-2 pb-3">
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
              <span>Order by Call: +234(0)803 404 2781</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;