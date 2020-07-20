import React from "react";
import PropTypes from "prop-types";

function Container(props) {
  return (
    <div
      style={{ minHeight: 500 + "px" }}
      className="max-w-2xl mt-10 sm:mx-auto"
    >
      {props.children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
