import React from 'react';
import ReactDOM from 'react-dom';
import { useImmerReducer } from 'use-immer';
import { BrowserRouter, Route } from 'react-router-dom';

// STATE MANAGEMENT
import StateContext from './contextsProviders/StateContext';
import DispatchContext from './contextsProviders/DispatchContext';
//COMPONENTS
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Homepage from './pages/Homepage';
import ViewSingleProduct from './pages/ViewSingleProduct';

function Main() {
  const initialState = {
    toggleImageViewer: false,
    toggleProfileDropdown: false,
    toggleHamburgerMenu: false,
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
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/product/:id">
              <ViewSingleProduct />
            </Route>
            <Footer />
          </div>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
