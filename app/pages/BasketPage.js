import React, { useContext } from "react";
import Page from '../components/shared/Page';
import StateContext from '../contextsProviders/StateContext';
import { removeDuplicatesGetCount } from '../helpers/JSHelpers';
import { useImmer } from 'use-immer';
import DispatchContext from '../contextsProviders/DispatchContext';


function BasketPage() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const [state, seState] = useImmer({});

  function handleChange(e) {
    appDispatch({ type: 'addToBasketCount' });
    const previousCount = e.target.getAttribute('data-previousval');
    const currentCount = e.target.value;
    const currentItem = JSON.parse(e.target.getAttribute('data-item'));

    localStorage.pushArrayItem('basket', currentItem);
  }

  return (
    <Page>
      <h1>Your Basket</h1>
      {removeDuplicatesGetCount(appState.basket).result.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <select data-item={`${JSON.stringify(item)}`} data-previousval={`${removeDuplicatesGetCount(appState.basket).count[item.id]}`} onChange={handleChange} className='bg-gray-100 px-2 py-1 border border-gray-400'>
              <option >{removeDuplicatesGetCount(appState.basket).count[item.id]}</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
          </div>
        );
      })}
    </Page>
  );
}

export default BasketPage;