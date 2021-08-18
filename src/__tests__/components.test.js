import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import CoinsReducer from '../reducers/coin';
import FilterReducer from '../reducers/filter';
import DetailsReducer from '../Reducers/detail';
import rootReducer from '../Reducers/index';
import App from '../components/App';
import Details from '../components/Details';
import Coin from '../components/Coin';
import Error from '../components/Error';
import Filter from '../containers/Filter';
import Nav from '../containers/Nav';

// const initialState = {

//   "coins": [
//     {
//       "id": "bitcoin",
//       "icon": "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/f3738cc5df5f59afb57111d67d951170_1.png",
//       "name": "Bitcoin",
//       "symbol": "BTC",
//       "rank": 1,
//       "price": 6362.74960614,
//       "priceBtc": 1,
//       "volume": 4514555849.85,
//       "marketCap": 110545616313,
//       "availableSupply": 17373875,
//       "totalSupply": 17373875,
//       "priceChange1h": 0.12,
//       "priceChange1d": -0.56,
//       "priceChange1w": -1.07,
//       "websiteUrl": "https://bitcoin.org",
//       "redditUrl": "https://www.reddit.com/r/bitcoin",
//       "twitterUrl": "https://twitter.com/btc",
//       "exp": [
//         "https://blockchain.info/",
//         "https://live.blockcypher.com/btc/",
//         "https://blockchair.com/bitcoin/blocks"
//       ]
//     },
//     {
//       "id": "ethereum",
//       "icon": "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/e1259737fa19af705f0207d5b384c37e_1027.png",
//       "name": "Ethereum",
//       "symbol": "ETH",
//       "rank": 2,
//       "price": 208.130215868,
//       "priceBtc": 0.03282527,
//       "volume": 1522373585.13,
//       "marketCap": 21473551841,
//       "availableSupply": 103173639,
//       "totalSupply": 103173639,
//       "priceChange1h": 0.04,
//       "priceChange1d": -1.44,
//       "priceChange1w": -1.89,
//       "websiteUrl": "https://www.ethereum.org/",
//       "redditUrl": "https://www.reddit.com/r/ethereum",
//       "twitterUrl": "https://twitter.com/ethereum",
//       "exp": [
//         "https://etherscan.io/",
//         "https://ethplorer.io/",
//         "https://etherchain.org/"
//       ]
//     },
//     {
//       "id": "ripple",
//       "icon": "https://api.coin-stats.com/api/files/812fde17aea65fbb9f1fd8a478547bde/f4f2f3a21bc4692c79d66d0b12f15c61_xrp.png",
//       "name": "XRP",
//       "symbol": "XRP",
//       "rank": 3,
//       "price": 0.5227380884,
//       "priceBtc": 0.00008244,
//       "volume": 688526769.189,
//       "marketCap": 21016950779,
//       "availableSupply": 40205508733,
//       "totalSupply": 99991792688,
//       "priceChange1h": 0.77,
//       "priceChange1d": 3.8,
//       "priceChange1w": -1.46,
//       "websiteUrl": "https://ripple.com/",
//       "redditUrl": "https://www.reddit.com/r/ripple",
//       "twitterUrl": "https://twitter.com/Ripple",
//       "exp": [
//         "https://xrpcharts.ripple.com/#/graph/",
//         "https://bithomp.com/explorer/"
//       ]
//     },
//   ]
// }

// const mockStore = configureStore({ reducer: { rootReducer }, initialState });

const coins = [{
  name: 'bitcoin',
}];

const filters = 'All';

const details = [{
  name: 'testing',
}];

const mockStore = configureStore({reducer: { rootReducer },  addCoin: coins, filter: filters, detail: details });

describe('Nav Component', () => {
  test('It should render', () => {
    const nav = renderer.create(
      <Provider store={mockStore}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(nav).toMatchSnapshot();
  });
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

describe('Filter Component', () => {
  test('It should render', () => {
    const filt = renderer.create(
      <BrowserRouter>
        <ErrorBoundary>
          <Filter />
        </ErrorBoundary>
      </BrowserRouter>,
    ).toJSON();
    expect(filt).toMatchSnapshot();
  });
});

describe('Coin Component', () => {
  test('It should render', () => {
    const coin = renderer.create(
      <BrowserRouter>
        <ErrorBoundary>
          <Coin />
        </ErrorBoundary>
      </BrowserRouter>,
    ).toJSON();
    expect(coin).toMatchSnapshot();
  });
});

describe('Error Component', () => {
  test('It should render', () => {
    const err = renderer.create(
      <BrowserRouter>
        <Error />
      </BrowserRouter>,
    ).toJSON();
    expect(err).toMatchSnapshot();
  });
});

export function createTestStore() {
  const store = createStore(
    combineReducers({
      addCoin: CoinsReducer,
      filter: FilterReducer,
      detail: DetailsReducer,
    })
  );
  return store;
}

let store;
describe('App Component', () => {
  beforeEach(() => {
    store = createTestStore();
  });
  test('It should render', () => {
    const home = renderer.create(
      <Provider store={store}>
      <App />
    </Provider>
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Details Component', () => {
  beforeEach(() => {
    store = createTestStore();
  });
  test('It should render', () => {
    const home = renderer.create(
      <Provider store={store}>
      <Details />
    </Provider>
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
