import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, createStore, combineReducers } from '@reduxjs/toolkit';
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

const coins = [{
  name: 'bitcoin',
}];

const filters = 'All';

const details = [{
  name: 'testing',
}];

const mockStore = configureStore({
  reducer: { rootReducer }, addCoin: coins, filter: filters, detail: details,
});

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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {//eslint-disable-line
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;//eslint-disable-line
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

export function createTestStore() {//eslint-disable-line
  const store = createStore(
    combineReducers({
      addCoin: CoinsReducer,
      filter: FilterReducer,
      detail: DetailsReducer,
    }),
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
      </Provider>,
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
      </Provider>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
