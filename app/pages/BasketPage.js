import React, { useContext } from "react";
import Page from '../components/shared/Page';
import StateContext from '../contextsProviders/StateContext';
import { removeDuplicates } from '../helpers/JSHelpers';

function BasketPage() {
  const appState = useContext(StateContext);
  return (
    <Page>
      <h1>Your Basket</h1>
      {removeDuplicates(appState.basket).result.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <span>Count: {removeDuplicates(appState.basket).count[item.id]}</span>
          </div>
        );
      })}
    </Page>
  );
}

export default BasketPage;