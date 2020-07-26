import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DispatchContext from '../../contextsProviders/DispatchContext';
import StateContext from '../../contextsProviders/StateContext';
import ImageViewer from '../shared/ImageViewer';

function SingleProductHtml({ singleProduct }) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

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
            <button onClick={() => appDispatch({ type: 'addItemToBasket', value: singleProduct })} className="bg-yellow-700 text-white w-full px-3 py-1 mt-5">Add to Basket</button>
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
