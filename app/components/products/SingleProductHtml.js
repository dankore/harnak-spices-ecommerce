import React from "react";
import PropTypes from "prop-types";

function SingleProductHtml({ singleProduct }) {
  return (
    <>
      <div>
        <h1 className="pt-10 pb-3 text-2xl text-center">
          {/* TITLE */}
          {singleProduct.title}
        </h1>
      </div>

      {/* SINGLE PRODUCT HTML */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-lg mx-auto">
        <div>
          <img className="w-56 h-56 mb-2" src={singleProduct.image} />
        </div>

        <div className="flex items-center">
          <div>
            {/* PRICE */}
            <div className="flex justify-left">
              <div>
                <span className="text-red-600 block">
                  <span className="text-sm">Sale</span>{" "}
                  <span className="text-2xl font-bold">
                    {singleProduct.price}
                  </span>
                </span>
                <span className="text-sm text-gray-600 -mt-2 block">
                  Original: {(singleProduct.price + 69).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SingleProductHtml.propTypes = {
  singleProduct: PropTypes.object,
};

export default SingleProductHtml;
