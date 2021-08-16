import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { v4 as uuidv4 } from 'uuid';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import Routes from './components/Routes';

const coins = [{
  name: 'bitcoin',
}];

const filters = 'All';

const details = [{
  name: 'testing',
}];

const store = createStore(
  rootReducer,
  { addCoin: coins, filter: filters, detail: details },
  devToolsEnhancer(),
);

// const store = createStore(
//   rootReducer,
//   { addCoin: coins },
//   devToolsEnhancer(),
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
