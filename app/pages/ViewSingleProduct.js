import React, { useEffect } from 'react';
import Page from '../components/shared/Page';
import Axios from 'axios';
import { useImmer } from 'use-immer';
import { useParams } from 'react-router-dom';
import SingleProductHtml from '../components/products/SingleProductHtml';
import LoadingDotsAnimation from '../components/shared/LoadingDotsAnimation';

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
        const response = await Axios.get(`https://fakestoreapi.com/products/${id}`, {
          cancelToken: request.token,
        });

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
    return <LoadingDotsAnimation />;
  }

  const descriptionSEO = `SALE ${(singleProduct.feed.price + 69).toFixed(2)}! Price before sale: ${singleProduct.feed.price}.`


  return (
    <Page title={singleProduct.feed.title} image={singleProduct.feed.image} description={descriptionSEO}>
      <SingleProductHtml singleProduct={singleProduct.feed} />
    </Page>
  );
}
export default ViewSingleProduct;
