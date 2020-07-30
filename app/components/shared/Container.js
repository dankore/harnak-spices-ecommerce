import React from 'react';
import PropTypes from 'prop-types';

function Container(props) {
  return (
    <div style={{ minHeight: `calc(100vh - 20rem)` }} className="mt-24 bg-white">
      {props.children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
