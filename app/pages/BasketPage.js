import React, { useContext } from "react";
import Page from '../components/shared/Page';
import StateContext from '../contextsProviders/StateContext';

function BasketPage() {
  const appState = useContext(StateContext);

  console.log(appState.basket)
  
  return (
    <Page>
      <h1>Your Basket</h1>
      {appState.basket.map((item, index) => {
        return(
          <div key={index}>
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </Page>
  );
}

export default BasketPage;