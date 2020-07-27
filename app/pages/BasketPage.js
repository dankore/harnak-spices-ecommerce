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
    const basketTotal = removeDuplicatesGetCount(appState.basket).result.reduce((runningTotal, item) => {
      const currTotal = item.price * removeDuplicatesGetCount(appState.basket).count[item.id];
      return runningTotal + currTotal;
    }, 0);

    return basketTotal;
  }

  function calTotalBeforeSavings() {
    const basketTotal = removeDuplicatesGetCount(appState.basket).result.reduce((runningTotal, item) => {
      const currTotal = (item.price + 69) * removeDuplicatesGetCount(appState.basket).count[item.id];
      return runningTotal + currTotal;
    }, 0);

    return basketTotal;
  }

  const totalAfterSavings = calTotal();
  const totalBeforeSavings = calTotalBeforeSavings();
  const savings = totalBeforeSavings - totalAfterSavings;
  const percentSavings = savings/totalBeforeSavings * 100

  return (
    <Page title="Basket">
      <div className='max-w-6xl mx-auto lg:flex pt-12 pb-3'>
        <div className='border-r'>
          {removeDuplicatesGetCount(appState.basket).result.map((item, index) => {
            return (
              <div className='flex mb-12 border-b' key={index}>

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

                <div className='lg:flex lg:justify-between lg:items-center lg:w-full px-3'>
                  {/* TITLE */}
                  <p className='lg:max-w-xs'>{item.title}</p>


                  {/* SELECT */}
                  <div className='my-5 lg:my-0 lg:text-center'>
                    <select
                      data-item={`${JSON.stringify(item)}`}
                      data-previousval={`${removeDuplicatesGetCount(appState.basket).count[item.id]}`}
                      onChange={handleChange}
                      className="flex-none bg-gray-100 px-2 py-1 border border-gray-400"
                    >
                      <option>{removeDuplicatesGetCount(appState.basket).count[item.id]}</option>
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
                      <span className='font-bold'>{new Intl.NumberFormat().format(Math.ceil(item.price) * removeDuplicatesGetCount(appState.basket).count[item.id])}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ minWidth: 400 + 'px' }} className='px-5 mt-12'>
          <div className='mb-5 flex justify-between'>
            <p>Grand total</p>
            <p className='font-semibold'>{new Intl.NumberFormat().format(Math.ceil(totalAfterSavings))}</p>
          </div>
          <button className='w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>Order Now</button>
          <p><span className='text-pink-700'>Congrats</span> you save <span className='text-pink-700'>{new Intl.NumberFormat().format(Math.ceil(savings))}</span> or <span className='text-pink-700'>{Math.floor(percentSavings)}%!</span> </p>
        </div>
      </div>
    </Page>
  );
}

export default BasketPage;
