import React, { useEffect } from 'react';
import Container from './Container';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { formatTitleAndDescription } from '../../helpers/JSHelpers';

function Page(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.title]);


  return (
    <Container>
      <Helmet>
        {/* General tags */}
        <title>{`${props.title} | Harnak Spices`}</title>
        <meta name="description" content={formatTitleAndDescription(props.description)} />
        <meta name="image" content={props.image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={props.url} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={formatTitleAndDescription(props.description)} />
        <meta property="og:image" content={props.image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={formatTitleAndDescription(props.description)} />
        <meta name="twitter:image" content={props.image} />
      </Helmet>
      {props.children}
    </Container>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default Page;
