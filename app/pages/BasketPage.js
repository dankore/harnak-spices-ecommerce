import React, { useContext } from 'react';
import Page from '../components/shared/Page';
import StateContext from '../contextsProviders/StateContext';
import { removeDuplicatesGetCount } from '../helpers/JSHelpers';
import DispatchContext from '../contextsProviders/DispatchContext';
import ImageViewer from '../components/shared/ImageViewer';
import { useImmer } from 'use-immer';

function BasketPage() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const [state, setState] = useImmer({ image: '', title: '' });

  function handleChange(e) {
    appDispatch({ type: 'addToBasketCount' });
    const previousCount = e.target.getAttribute('data-previousval');
    const currentCount = e.target.value;
    const currentItem = JSON.parse(e.target.getAttribute('data-item'));
    const difference = currentCount - previousCount;

    if (difference > 0) {
      addItemstoLocalStorage(currentItem, difference);
    }
    if (difference < 0) {
      removeItemsFromLocalStorage(currentItem, difference);
    }
  }

  function addItemstoLocalStorage(item, count) {
    while (count > 0) {
      localStorage.pushArrayItem('basket', item);
      count--;
    }
  }

  function removeItemsFromLocalStorage(item, count) {
    count = Math.abs(count); // BCAUSE @COUNT IS NEGATIVE
    while (count > 0) {
      localStorage.deleteItem('basket', item);
      count--;
    }
  }

  function handleImageView(e) {
    const url = e.target.src;
    const title = e.target.getAttribute('data-title');

    setState((draft) => {
      draft.image = url;
      draft.title = title;
    });

    appDispatch({ type: 'toggleImageViewer' });
  }

  function calTotal() {
    const basketTotal = removeDuplicatesGetCount(appState.basket).result.reduce(
      (runningTotal, item) => {
        const currTotal = item.price * removeDuplicatesGetCount(appState.basket).count[item.id];
        return runningTotal + currTotal;
      },
      0
    );

    return basketTotal;
  }

  function calTotalBeforeSavings() {
    const basketTotal = removeDuplicatesGetCount(appState.basket).result.reduce(
      (runningTotal, item) => {
        const currTotal =
          (item.price + 69) * removeDuplicatesGetCount(appState.basket).count[item.id];
        return runningTotal + currTotal;
      },
      0
    );

    return basketTotal;
  }

  function handleRemoveItem(e) {
    let currentItemCount = e.target.getAttribute('data-previousval');
    const item = JSON.parse(e.target.getAttribute('data-item'));
    while (currentItemCount > 0) {
      localStorage.deleteItem('basket', item);
      currentItemCount--;
    }
    appDispatch({ type: 'addToBasketCount' }); // RE-FETCH FROM LOCAL STORAGE
  }

  const totalAfterSavings = calTotal();
  const totalBeforeSavings = calTotalBeforeSavings();
  const savings = totalBeforeSavings - totalAfterSavings;
  const percentSavings = (savings / totalBeforeSavings) * 100;
  const basketItemsUnique = removeDuplicatesGetCount(appState.basket).result;
  const basketItemIds = removeDuplicatesGetCount(appState.basket).count;

  return (
    <Page title="Basket">
      <div className="w-full pt-12 pb-3">
        <div className="max-w-5xl mx-auto lg:flex">
          <div>
            {basketItemsUnique.length > 0 ? (
              basketItemsUnique.map((item, index) => {
                return (
                  <div className="relative flex mb-12 border-b border-r" key={index}>
                    {/* IMAGE */}
                    <div>
                      <img
                        onClick={handleImageView}
                        data-title={`${item.title}`}
                        className="flex w-56 h-56 mb-2 cursor-pointer"
                        src={item.image}
                      />
                    </div>
                    {/* IMAGE VIEWER */}
                    {appState.toggleImageViewer && (
                      <ImageViewer image={state.image} title={state.title} />
                    )}

                    <div className="lg:grid lg:grid-cols-3 px-3 w-full">
                      {/* TITLE */}
                      <p className="">{item.title}</p>

                      {/* SELECT */}
                      <div className="my-8 lg:my-0 lg:text-center">
                        <select
                          data-item={`${JSON.stringify(item)}`}
                          data-previousval={`${basketItemIds[item.id]}`}
                          onChange={handleChange}
                          className="flex-none bg-gray-100 px-2 py-1 border border-gray-400"
                        >
                          <option>{basketItemIds[item.id]}</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                        </select>
                      </div>

                      {/* PRICE */}
                      <div className="lg:flex lg:justify-center">
                        <div>
                          <span className="block">
                            <s className="text-sm text-gray-600 -mt-2 block">
                              {Math.ceil(item.price + 69)}
                            </s>
                            <span className="">{Math.ceil(item.price)} each</span>
                          </span>
                          <span className="font-bold">
                            {new Intl.NumberFormat().format(
                              Math.ceil(item.price) * basketItemIds[item.id]
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleRemoveItem}
                      data-item={`${JSON.stringify(item)}`}
                      data-previousval={`${basketItemIds[item.id]}`}
                      className="absolute bottom-0 right-0 underline px-3 m-2"
                    >
                      Remove
                    </button>
                  </div>
                );
              })
            ) : (
              <div>Your basket is empty</div>
            )}
          </div>
          {basketItemsUnique.length > 0 && (
            <div className="px-5 w-full">
              <div className="mb-5 flex justify-between">
                <p>Grand total</p>
                <p className="font-semibold">
                  {new Intl.NumberFormat().format(Math.ceil(totalAfterSavings))}
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Order Now
              </button>
              </div>
              <p>
                <span className="text-pink-700">Congrats</span> — you saved{' '}
                <span className="text-pink-700">
                  {new Intl.NumberFormat().format(Math.ceil(savings))}
                </span>{' '}
                or <span className="text-pink-700">{Math.floor(percentSavings)}%!</span>{' '}
              </p>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}

export default BasketPage;
