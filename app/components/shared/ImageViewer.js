import React from 'react';
import PropTypes from 'prop-types';

function ImageViewer({ image, title }) {
  return (
    <div className="modal shadow-lg absolute bg-white">
      <img style={{ width: 700 + 'px' }} src={image} alt="product" />
      <p className="px-3 w-64 text-center">{title}</p>
    </div>
  );
}

ImageViewer.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ImageViewer;
