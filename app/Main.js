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
        if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
      }
      return thisArray;
    };

    Storage.prototype.pushArrayItem = function (arrayName, arrayItem) {
      var existingArray = this.getArray(arrayName);
      existingArray.push(arrayItem);
      this.setItem(arrayName, JSON.stringify(existingArray));
    };

    Storage.prototype.popArrayItem = function (arrayName) {
      var arrayItem = {};
      var existingArray = this.getArray(arrayName);
      if (existingArray.length > 0) {
        arrayItem = existingArray.pop();
        this.setItem(arrayName, JSON.stringify(existingArray));
      }
      return arrayItem;
    };

    Storage.prototype.shiftArrayItem = function (arrayName) {
      var arrayItem = {};
      var existingArray = this.getArray(arrayName);
      if (existingArray.length > 0) {
        arrayItem = existingArray.shift();
        this.setItem(arrayName, JSON.stringify(existingArray));
      }
      return arrayItem;
    };

    Storage.prototype.unshiftArrayItem = function (arrayName, arrayItem) {
      var existingArray = this.getArray(arrayName);
      existingArray.unshift(arrayItem);
      this.setItem(arrayName, JSON.stringify(existingArray));
    };

    Storage.prototype.deleteAnItem = function (arrayName, arrayItem) {
      var existingArray = this.getArray(arrayName);
      var index = existingArray.findIndex(item => item.id == arrayItem.id); // GET INDEX
      existingArray.splice(index, 1); // REMOVED ITEM
      this.setItem(arrayName, JSON.stringify(existingArray));
    };

    Storage.prototype.deleteArray = function (arrayName) {
      this.removeItem(arrayName);
    };


    // .pushArrayItem(arrayName, arrayItem); -> adds an element onto end of named array
    //   .unshiftArrayItem(arrayName, arrayItem); -> adds an element onto front of named array
    //     .popArrayItem(arrayName); -> removes & returns last array element
    //       .shiftArrayItem(arrayName); -> removes & returns first array element
    //         .getArray(arrayName); -> returns entire array
    //           .deleteArray(arrayName); -> removes entire array from storage
  }, []);

  useEffect(() => {
    dispatch({ type: 'addItemToBasket', value: localStorage.getArray('basket') });
  }, [state.addToBasketCount]);



  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <SeoDefault />
          <Suspense fallback={<LoadingDotsAnimation />}>
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
