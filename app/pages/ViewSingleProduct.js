import React from 'react';
import Page from '../components/shared/Page';
import { useParams } from 'react-router-dom';
import SingleProductHtml from '../components/products/SingleProductHtml';
import { data } from '../data';

function ViewSingleProduct() {
  const { id } = useParams();
  let singleProduct = {
    feed: data[id - 1],
  };

  const descriptionSEO = `SALE ${singleProduct.feed.price + 69}! Price before sale: ${
    singleProduct.feed.price
  }.`;

  return (
    <Page
      title={singleProduct.feed.title}
      image={singleProduct.feed.image}
      description={descriptionSEO}
      url={window.location}
    >
      <SingleProductHtml singleProduct={singleProduct.feed} />
    </Page>
  );
}
export default ViewSingleProduct;
