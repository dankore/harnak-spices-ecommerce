import React from 'react';
import PropTypes from 'prop-types';

function Branch({ state, phone }) {
  return (
    <div className="flex items-center justify-center custom-shadow w-full h-48 sm:w-56 sm:h-48 my-3 sm:m-3">
      <div>
        <p className="text-center font-bold">{state}</p>
        <a
          href={`tel:${phone}`}
          className="flex py-1 px-2 items-center active:bg-gray-300 hover:bg-gray-200"
        >
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
};

export default Branch;
