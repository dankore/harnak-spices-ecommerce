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

  console.log(singleProduct);

  return (
    <Page title="Harnak Spices: Online Shopping for Spices">
      <div>
        <h1 className="pt-10 pb-3 text-2xl text-center">
          {/* TITLE */}
          {singleProduct.feed.title}
        </h1>
      </div>

      {/* SINGLE PRODUCT HTML */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-lg mx-auto">
        <div>
          <img className="w-56 h-56 mb-2" src={singleProduct.feed.image} />
        </div>

        <div className="flex items-center">
          <div>
            {/* PRICE */}
            <div className="flex justify-left">
              <div>
                <span className="text-red-600 block">
                  <span className="text-sm">Sale</span>{" "}
                  <span className="text-2xl font-bold">
                    {singleProduct.feed.price}
                  </span>
                </span>
                <span className="text-sm text-gray-600 -mt-2 block">
                  Original: {(singleProduct.feed.price + 69).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default ViewSingleProduct;
