import React, { useContext } from 'react';
import DispatchContext from '../../contextsProviders/DispatchContext';
import StateContext from '../../contextsProviders/StateContext';

function Footer() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <div className="w-full flex justify-center">
      {/* MODAL OVERLAY */}
      {appState && appState.toggleImageViewer && (
        <div
          onClick={() => appDispatch({ type: 'toggleImageViewer' })}
          className="modal-overlay bg-black absolute cursor-pointer"
        >
          <div className="absolute flex items-center left-0 shadow-lg mt-3 ml-3">
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
        <p>@{new Date().getFullYear()} Harnak Spices </p>
        <p className="text-gray-500 text-sm">Web design by Adamu M. Dankore </p>
      </div>
    </div>
  );
}

export default Footer;
