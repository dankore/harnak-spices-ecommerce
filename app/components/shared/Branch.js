import React from 'react';
import PropTypes from 'prop-types';

function Branch({ state, phone, background }) {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center flex items-center justify-center custom-shadow w-full h-48 sm:w-56 sm:h-48 my-3 sm:m-3"
    >
      <div className="font-bold bg-white opacity-75 hover:opacity-100">
        <p className="text-center ">{state}</p>
        <a href={`tel:${phone}`} className="flex py-1 px-2 items-center hover:text-red-600">
          <i className="text-3xl text-gray-700 mr-2 fas fa-phone-square"></i>
          <span>{phone}</span>
        </a>
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
