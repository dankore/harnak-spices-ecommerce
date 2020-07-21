import React, { useEffect } from 'react';
import Container from './Container';
import PropTypes from 'prop-types';

function Page(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = props.title;
  }, [props.title]);

  return <Container>{props.children}</Container>;
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.any,
};

export default Page;
