import React from 'react';
import PropTypes from 'prop-types';

function ImageViewer({ image, title }) {
  return (
    <div className="modal shadow-lg absolute bg-white">
      <img src={image} alt="product" />
      {title}
    </div>
  );
}

ImageViewer.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ImageViewer;
