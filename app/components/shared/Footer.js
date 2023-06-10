import React, { useContext } from 'react';
import DispatchContext from '../../contextsProviders/DispatchContext';
import StateContext from '../../contextsProviders/StateContext';
import { Link } from 'react-router-dom';

function Footer() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <div className="w-full flex pt-2 justify-center my-12">
      {/* MODAL OVERLAY */}
      {appState && appState.toggleImageViewer && (
        <div
          onClick={() => appDispatch({ type: 'toggleImageViewer' })}
          className="modal-overlay bg-black absolute cursor-pointer"
        >
          <div
            style={{ right: 20 + '%', zIndex: 130 }}
            className="absolute flex items-center bottom-0 shadow-lg"
          >
            <button className="rounded-full text-3xl focus:outline-none transition ease-in-out duration-150 px-3 bg-white">
              X
            </button>
            <a href="/">
              <i className="fas fa-home text-white text-4xl ml-2"></i>
            </a>
          </div>
        </div>
      )}
      <div className="text-center">
        <div className="flex">
          <p>@{new Date().getFullYear()} Harnak Foods </p>
          <Link className="ml-3 inline-block" to="/about">
            About
          </Link>
          <Link className="ml-3 inline-block" to="/branches">
            Branches
          </Link>
        </div>
        <p className="text-gray-700 text-sm mt-5">
          <a href="https://www.dankoresoft.com/?utm_source=harnakt&utm_medium=referral&utm_campaign=designed_by">
            Powered by Dankore Software LLC, USA.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
