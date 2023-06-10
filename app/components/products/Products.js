import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StateContext from '../../contextsProviders/StateContext';

function Products({ products }) {
  const appState = useContext(StateContext);

  return (
    <>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
          {products.map(product => {
            return (
              <Link
                to={`/product/${product.id}`}
                className="border mb-5 lg:mb-0 custom-shadow bg-white"
                key={product.id}
              >
                <img className="w-full cursor-pointer" src={product.image} alt={product.title} />

                {/* TITLE */}
                <p className="text-center text-xl text-gray-800 semi-bold">{product.title}</p>
                {/* PRICE */}
                <div className="flex items-center justify-center px-2">
                  <span className="text-red-600 flex items-center">
                    <span className="text-sm mr-1">Sale:</span>{' '}
                    <span className="text-2xl font-bold">{product.price}</span>
                  </span>
                  <span className="text-sm text-gray-600 block ml-2">
                    Originally: {product.price + product.price * appState.DISCOUNT}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-2xl text-center">
          No Products at this time. Please check back later.
        </div>
      )}
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
