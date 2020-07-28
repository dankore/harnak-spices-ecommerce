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
      <div className="max-w-lg mx-auto">
        {/* <input
          className="w-full pl-2 py-1 border border-gray-600 bg-gray-200"
          type="text"
          placeholder="Search Harnak Online Store..."
        /> */}
      </div>
      <h1 className="py-10 text-center">Welcome to Harnak Spices Online Store</h1>
      <Products products={data} />
    </Page>
  );
}

export default Homepage;
