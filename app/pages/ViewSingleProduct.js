import React from 'react';
import Page from '../components/shared/Page';
import { useParams } from 'react-router-dom';
import SingleProductHtml from '../components/products/SingleProductHtml';
import { data } from '../data';

function ViewSingleProduct() {
  const { id } = useParams();
  let singleProduct = {
    feed: data[id],
  };

  const descriptionSEO = `SALE ${(singleProduct.feed.price + 69).toFixed(2)}! Price before sale: ${
    singleProduct.feed.price
  }.`;

  return (
    <Page
      title={singleProduct.feed.title}
      image={singleProduct.feed.image}
      description={descriptionSEO}
    >
      <SingleProductHtml singleProduct={singleProduct.feed} />
    </Page>
  );
}
export default ViewSingleProduct;
