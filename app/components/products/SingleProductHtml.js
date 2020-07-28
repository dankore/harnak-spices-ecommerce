import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DispatchContext from '../../contextsProviders/DispatchContext';
import StateContext from '../../contextsProviders/StateContext';
import ImageViewer from '../shared/ImageViewer';

function SingleProductHtml({ singleProduct }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const [count, setCount] = useState(0);

  function handleAddItem() {
    appDispatch({ type: 'addToBasketCount' });
    localStorage.pushArrayItem('basket', singleProduct);
    setCount(localStorage.getArray('basket').length - localStorage.getItem('initialBasketCount'));
  }

  useEffect(() => {
    localStorage.setItem('initialBasketCount', appState.basket.length);
  }, [window.location]);

  return (
    <div className="py-10">
      {/* IMAGE VIEWER */}
      {appState.toggleImageViewer && (
        <ImageViewer image={singleProduct.image} title={singleProduct.title} />
      )}
      <div>
        <h1 className="py-10 text-2xl text-center">
          {/* TITLE */}
          {singleProduct.title}
        </h1>
      </div>

      {/* SINGLE PRODUCT HTML */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 max-w-lg mx-auto sm:border sm:border-gray-200 p-4">
        <div className="flex justify-center">
          <img
            onClick={() => appDispatch({ type: 'toggleImageViewer' })}
            className="flex w-56 h-56 mb-2 cursor-pointer"
            src={singleProduct.image}
          />
        </div>

        <div className="flex justify-center items-center">
          <div>
            {/* PRICE */}
            <div className="flex justify-center">
              <div>
                <span className="text-red-600 block">
                  <span className="text-sm">Sale</span>{' '}
                  <span className="text-2xl font-bold">{singleProduct.price}</span>
                </span>
                <span className="text-sm text-gray-600 -mt-2 block">
                  Original: {(singleProduct.price + 69).toFixed(2)}
                </span>
              </div>
            </div>
            <div>
              <button
                onClick={handleAddItem}
                className="inline-flex items-center justify-center px-4 mt-5 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                <i className="text-gray-200 mr-2 fas fa-shopping-basket"></i>
                Add to Basket
                <span className="ml-2">{count > 0 ? count : ''}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleProductHtml.propTypes = {
  singleProduct: PropTypes.any,
};

export default SingleProductHtml;
