import React from 'react';
import Page from '../components/shared/Page';
import { useParams } from 'react-router-dom';
import SingleProductHtml from '../components/products/SingleProductHtml';
import { data } from '../data';
import NotFound from './404';

function ViewSingleProduct() {
  let { id } = useParams();
  id = +id;
  id = Math.floor(id);
  let singleProduct;

  // CHECK FOR IDs GREATER THAN LENGTH OF DATA
  if (id > data.length || id < 1 || Number.isNaN(id)) {
    return <NotFound />;
  } else {
    singleProduct = {
      feed: data[id - 1],
    };
  }

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
