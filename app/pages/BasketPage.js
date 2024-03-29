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

    setState(draft => {
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
          (item.price + item.price * appState.DISCOUNT) *
          removeDuplicatesGetCount(appState.basket).count[item.id];
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
      <div className="w-full">
        {basketItemsUnique.length > 0 ? (
          <>
            <h2 className="max-w-5xl text-xl mx-auto pl-2 pt-12">
              <strong>Your cart:</strong>{' '}
              {appState.basket.length > 1
                ? appState.basket.length + ' items'
                : appState.basket.length + ' item'}{' '}
            </h2>
            <div className="py-12">
              <div className="max-w-5xl mx-auto custom-shadow p-5 lg:hidden mb-5">
                <div className="mb-5 flex justify-between w-full">
                  <p>Grand total</p>
                  <p className="font-semibold">
                    {new Intl.NumberFormat().format(Math.ceil(totalAfterSavings))}
                  </p>
                </div>
                <p className="text-center">
                  <span className="text-pink-700">Congrats</span> — you saved{' '}
                  <span className="text-pink-700">
                    {new Intl.NumberFormat().format(Math.ceil(savings))}
                  </span>{' '}
                  or <span className="text-pink-700">{Math.floor(percentSavings)}%!</span>{' '}
                </p>
              </div>
              <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div>
                  {basketItemsUnique.length > 0 &&
                    basketItemsUnique.map((item, index) => {
                      return (
                        <div className="relative mb-12 border custom-shadow" key={index}>
                          {/* IMAGE */}
                          <div className="w-full">
                            <img
                              onClick={handleImageView}
                              data-title={`${item.title}`}
                              className="object-cover h-56 w-full mb-2 cursor-pointer"
                              src={item.image}
                              alt="product"
                            />
                          </div>
                          {/* IMAGE VIEWER */}
                          {appState.toggleImageViewer && (
                            <ImageViewer image={state.image} title={state.title} />
                          )}

                          {/* TITLE */}
                          <p className="text-xl text-gray-800 semi-bold pl-2">{item.title}</p>

                          <div className="flex justify-between items-center mt-3 px-2 mb-3">
                            {/* SELECT */}
                            <div>
                              <label htmlFor="quantity">Quantity:</label>
                              <select
                                data-item={`${JSON.stringify(item)}`}
                                data-previousval={`${basketItemIds[item.id]}`}
                                onChange={handleChange}
                                className="flex-none px-2 py-1 border border-gray-400 ml-2"
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
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                              </select>
                            </div>

                            {/* PRICE */}
                            <div className="flex items-center">
                              <s className="text-sm text-gray-600 block">
                                {Math.ceil(item.price + item.price * appState.DISCOUNT)}
                              </s>
                              <span className="block mx-3">{Math.ceil(item.price)} each</span>
                              <span className="font-bold block">
                                {new Intl.NumberFormat().format(
                                  Math.ceil(item.price) * basketItemIds[item.id]
                                )}
                              </span>
                            </div>

                            <button
                              onClick={handleRemoveItem}
                              data-item={`${JSON.stringify(item)}`}
                              data-previousval={`${basketItemIds[item.id]}`}
                              className="hover:text-gray-800 underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div style={{ minWidth: 400 + 'px' }} className="w-full lg:ml-2 lg:mt-px">
                  <div>
                    <div className="custom-shadow p-5 lg:block hidden">
                      <div className="mb-5 flex justify-between">
                        <p>Grand total</p>
                        <p className="font-semibold">
                          {new Intl.NumberFormat().format(Math.ceil(totalAfterSavings))}
                        </p>
                      </div>
                      <p className="text-center">
                        <span className="text-pink-700">Congrats</span> — you saved{' '}
                        <span className="text-pink-700">
                          {new Intl.NumberFormat().format(Math.ceil(savings))}
                        </span>{' '}
                        or <span className="text-pink-700">{Math.floor(percentSavings)}%!</span>{' '}
                      </p>
                    </div>
                    <div className="custom-shadow mt-5">
                      <h2 className="px-3 py-1 bg-blue-600 text-white text-2xl text-center">
                        Order Now
                      </h2>
                      <div>
                        <a
                          href="https://chat.whatsapp.com/Clrq9WlqBjnEdPrgMbxyt8"
                          className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                        >
                          <i className="text-4xl text-green-500 mr-2 fab fa-whatsapp-square"></i>
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href="https://www.facebook.com/messages/t/harnaks"
                          className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                        >
                          <i className="text-4xl text-blue-500 mr-2 fab fa-facebook-square"></i>
                          <span>Facebook</span>
                        </a>
                        <a
                          href="mailto:harnakspices@gmail.com"
                          className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                        >
                          <i
                            style={{ fontSize: `${2.1}rem` }}
                            className="text-gray-700 mr-2 fas fa-envelope"
                          ></i>
                          <span>Email: harnakspices@gmail.com</span>
                        </a>
                        <a
                          href="tel:+2348034042781"
                          className="pl-4 pt-1 pb-1 flex items-center active:bg-gray-300 hover:bg-gray-200"
                        >
                          <i className="text-4xl text-gray-700 mr-2 fas fa-phone-square"></i>
                          <span>Call: +234(0)803 404 2781</span>
                        </a>
                      </div>
                    </div>
                    <div className="custom-shadow mt-5">
                      <h2 className="px-3 py-1 bg-red-400 text-white text-sm text-center">
                        No, 2 Lamba, off Hassan Dalhatu Road, Unguwan Mallam Ashehu, Suleja, Niger
                        State
                      </h2>
                      <img
                        className="object-cover h-56 w-full mb-2"
                        src="https://res.cloudinary.com/my-nigerian-projects/image/upload/v1596000606/Others/suleja_bqrohv.png"
                        alt="suleja"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-2xl text-center">Empty basket</div>
        )}
      </div>
    </Page>
  );
}

export default BasketPage;
