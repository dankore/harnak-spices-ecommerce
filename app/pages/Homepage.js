import React from 'react';
import Page from '../components/shared/Page';
import Products from '../components/products/Products';
import { data } from '../data';

function Homepage() {
  const image = `https://res.cloudinary.com/my-nigerian-projects/image/upload/v1594491219/free-background-press-v2_pg66nf.svg`;
  const description = `Find the best African spices online.`;
  const title = `Shop online for your spices | Harnak Spices`;

  return (
    <Page title={title} image={image} description={description}>
      <div className="py-5">
        <h1 className="py-6 font-semibold text-2xl text-center">
          Welcome to Harnak Spices Online Store
        </h1>
        <Products products={data} />
      </div>
    </Page>
  );
}

export default Homepage;
