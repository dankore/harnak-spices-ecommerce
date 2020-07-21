import React from "react";
import PropTypes from "prop-types";
import Page from "./Page";
import { Link } from "react-router-dom";

function Products({ products }) {
  //   {
  //   "id": 1,
  //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //   "price": 109.95,
  //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //   "category": "men clothing",
  //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  // }

  return (
    <Page title="Products">
      <div className="bg-white flex justify-around flex-wrap">
        {products.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className="w-56 my-10 lg:m-3"
              key={product.id}
            >
              <img className="w-56 h-56 mb-2" src={product.image} />

              {/* PRICE */}
              <div className="flex justify-center">
                <div>
                  <span className="text-red-600 block">
                    <span className="text-sm">Sale</span>{" "}
                    <span className="text-2xl font-bold">{product.price}</span>
                  </span>
                  <span className="text-sm text-gray-600 -mt-2 block">
                    Original: {(product.price + 69).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* TITLE */}
              <p className="text-center text-sm semi-bold mt-3">
                {product.title}
              </p>
            </Link>
          );
        })}
      </div>
    </Page>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
