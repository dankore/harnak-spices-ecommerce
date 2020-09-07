import React from 'react';
import PropTypes from 'prop-types';

function Branch({ state, phone, background }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center flex items-center justify-center custom-shadow w-full h-48 sm:w-56 sm:h-48 my-3 sm:m-3"
    >
      <div className="absolute font-bold w-full h-48 sm:w-56 sm:h-48 bg-blue-900 opacity-75 hover:bg-transparent flex justify-center items-center text-white">
        <div className="hover:bg-black">
          <p className="text-center">{state}</p>
          <a href={`tel:${phone}`} className="flex py-1 px-2 items-center">
            <i className="text-3xl mr-2 fas fa-phone-square"></i>
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

Branch.propTypes = {
  state: PropTypes.string,
  phone: PropTypes.string,
  background: PropTypes.string,
};

export default Branch;
