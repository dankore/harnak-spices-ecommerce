import React from 'react';
import PropTypes from 'prop-types';

function Container(props) {
  return (
    <div style={{ minHeight: `calc(100vh - 20rem)` }} className="bg-white px-3">
      {props.children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
