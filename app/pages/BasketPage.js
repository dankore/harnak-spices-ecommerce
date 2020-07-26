import React, { useContext } from "react";
import Page from '../components/shared/Page';
import StateContext from '../contextsProviders/StateContext';
import { removeDuplicatesGetCount } from '../helpers/JSHelpers';
import { useImmer } from 'use-immer';

function BasketPage() {
  const appState = useContext(StateContext);
  const [state, seState] = useImmer({});

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <Page>
      <h1>Your Basket</h1>
      {removeDuplicatesGetCount(appState.basket).result.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <select className='bg-gray-100 px-2 py-1 border border-gray-400'>
              <option>{removeDuplicatesGetCount(appState.basket).count[item.id]}</option>
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