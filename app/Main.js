import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useImmerReducer } from 'use-immer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// STATE MANAGEMENT
import StateContext from './contextsProviders/StateContext';
import DispatchContext from './contextsProviders/DispatchContext';
//COMPONENTS
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Homepage from './pages/Homepage';
import LoadingDotsAnimation from './components/shared/LoadingDotsAnimation';
import SeoDefault from './components/shared/SeoDefault';
import BasketPage from './pages/BasketPage';
const ViewSingleProduct = lazy(() => import('./pages/ViewSingleProduct'));

function Main() {
  const initialState = {
    toggleImageViewer: false,
    toggleProfileDropdown: false,
    toggleHamburgerMenu: false,
    basket: [],
    addToBasketCount: 0,
    DISCOUNT: 0.3,
  };

  function appReducer(draft, action) {
    switch (action.type) {
      case 'toggleImageViewer':
        draft.toggleImageViewer = !draft.toggleImageViewer;
        return;
      case 'toggleProfileDropdown':
        draft.toggleProfileDropdown = !draft.toggleProfileDropdown;
        return;
      case 'toggleHamburgerMenu':
        draft.toggleHamburgerMenu = !draft.toggleHamburgerMenu;
        return;
      case 'turnOff':
        draft.toggleHamburgerMenu = false;
        draft.toggleImageViewer = false;
        draft.toggleProfileDropdown = false;
        return;
      case 'addItemToBasket':
        draft.basket = action.value;
        return;
      case 'addToBasketCount':
        draft.addToBasketCount++;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  console.log(`%c Hello, my name is...not important`, 'font-size: 2em; color: green');

  useEffect(() => {
    Storage.prototype.getArray = function (arrayName) {
      var thisArray = [];
      var fetchArrayObject = this.getItem(arrayName);
      if (typeof fetchArrayObject !== 'undefined') {
        if (fetchArrayObject !== null) {
          thisArray = JSON.parse(fetchArrayObject);
        }
      }
      return thisArray;
    };

    Storage.prototype.pushArrayItem = function (arrayName, arrayItem) {
      var existingArray = this.getArray(arrayName);
      existingArray.push(arrayItem);
      this.setItem(arrayName, JSON.stringify(existingArray));
    };

    Storage.prototype.deleteItem = function (arrayName, arrayItem) {
      var existingArray = this.getArray(arrayName);
      var index = existingArray.findIndex(item => item.id == arrayItem.id); // GET INDEX
      existingArray.splice(index, 1); // REMOVED ITEM
      this.setItem(arrayName, JSON.stringify(existingArray));
    };
  }, []);

  useEffect(() => {
    dispatch({ type: 'addItemToBasket', value: localStorage.getArray('basket') });
  }, [state.addToBasketCount]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<LoadingDotsAnimation />}>
            <SeoDefault />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/product/:id">
                <ViewSingleProduct />
              </Route>
              <Route path="/basket">
                <BasketPage />
              </Route>
            </Switch>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
