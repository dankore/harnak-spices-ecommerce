import React from 'react';
import PropTypes from 'prop-types';

function ImageViewer({ image, title }) {
  return (
    <div className="modal shadow-lg absolute bg-white">
      <img src={image} alt="productImage" />
      {title}
    </div>
  );
}

ImageViewer.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.any,
};

export default ImageViewer;
