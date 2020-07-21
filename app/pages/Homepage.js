import React, { useEffect } from "react";
import Page from "../components/shared/Page";
import Axios from "axios";

function Homepage() {
  useEffect(() => {
    const request = Axios.CancelToken.source();
    (async function getProducts() {
      const response = await Axios.get(
        "https://fakestoreapi.com/products?limit=5",
        {
          cancelToken: request.token,
        }
      );
      console.log(response.data);
    })();
    return () => request.cancel();
  }, []);

  return (
    <Page title="Harnak Spices: Online Shopping for Spices">
      <h1>HOMEPAGE</h1>
    </Page>
  );
}

export default Homepage;
