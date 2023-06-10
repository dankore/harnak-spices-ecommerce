import React from 'react';
import { Helmet } from 'react-helmet';
import { formatTitleAndDescription } from '../../helpers/JSHelpers';

function SeoDefault() {
  const image = `https://res.cloudinary.com/my-nigerian-projects/image/upload/v1594491219/free-background-press-v2_pg66nf.svg`;
  const description = `Find the best African spices online.`;
  const title = `Shop online for your spices | Harnak Foods`;

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={formatTitleAndDescription(description)} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={window.location} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={formatTitleAndDescription(description)} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={formatTitleAndDescription(description)} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  );
}

export default SeoDefault;
