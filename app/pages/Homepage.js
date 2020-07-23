import React, { useEffect } from 'react';
import Page from '../components/shared/Page';
import Axios from 'axios';
import { useImmer } from 'use-immer';
import Products from '../components/products/Products';
import LoadingDotsAnimation from '../components/shared/LoadingDotsAnimation';

function Homepage() {
  const [products, setProducts] = useImmer({
    isLoading: false,
    feed: [],
  });

  useEffect(() => {
    const request = Axios.CancelToken.source();
    try {
      setProducts((draft) => {
        draft.isLoading = true;
      });
      (async function getProducts() {
        const response = await Axios.get('https://fakestoreapi.com/products?limit=5', {
          cancelToken: request.token,
        });

        setProducts((draft) => {
          draft.isLoading = false;
          draft.feed = response.data;
        });
      })();
    } catch (error) {
      console.log(error.message);
    }
    return () => request.cancel();
  }, []);

  if (products.isLoading) {
    return <LoadingDotsAnimation />;
  }

  return (
    <Page title="Harnak Spices: Online Shopping for Spices">
      <div className="max-w-lg mx-auto">
        <input
          className="w-full pl-2 py-1 border border-gray-600 bg-gray-200"
          type="text"
          placeholder="Search Harnak Online Store..."
        />
      </div>
      <h1 className="py-10 text-center">Welcome to Harnak Spices Online Store</h1>
      <Products products={products.feed} />
    </Page>
  );
}

export default Homepage;
