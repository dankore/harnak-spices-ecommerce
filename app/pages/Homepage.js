import React, { useEffect } from "react";
import Page from "../components/shared/Page";
import Axios from "axios";
import { useImmer } from "use-immer";
import Products from "../components/shared/Products";

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
        const response = await Axios.get(
          "https://fakestoreapi.com/products?limit=5",
          {
            cancelToken: request.token,
          }
        );

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
    return <div>Loading...</div>;
  }

  return (
    <Page title="Harnak Spices: Online Shopping for Spices">
      <h1 className="py-10 text-center">
        Welcome to Harnak Spices Online Store
      </h1>
      <Products products={products.feed} />
    </Page>
  );
}

export default Homepage;
