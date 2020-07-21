import React, { useEffect } from "react";
import Page from "../components/shared/Page";
import Axios from "axios";
import { useImmer } from "use-immer";
import { useParams } from "react-router-dom";

function ViewSingleProduct() {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useImmer({
    isLoading: false,
    feed: [],
  });

  useEffect(() => {
    const request = Axios.CancelToken.source();
    try {
      setSingleProduct((draft) => {
        draft.isLoading = true;
      });

      (async function getSingleProduct() {
        const response = await Axios.get(
          `https://fakestoreapi.com/products/${id}`,
          {
            cancelToken: request.token,
          }
        );

        setSingleProduct((draft) => {
          draft.isLoading = false;
          draft.feed = response.data;
        });
      })();
    } catch (error) {
      console.log(error.message);
    }
    return () => request.cancel();
  }, []);

  if (singleProduct.isLoading) {
    return <div>Loading...</div>;
  }

  console.log(singleProduct)

  return (
    <Page title="Harnak Spices: Online Shopping for Spices">
      <h1 className="py-10 text-center">VIEW SINGLE</h1>
      {/* SINGLE PRODCTU HTML */}
    </Page>
  );
}

export default ViewSingleProduct;
