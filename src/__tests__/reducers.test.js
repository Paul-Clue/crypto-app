import DetailsReducer from '../reducers/detail';
import FilterReducer from '../reducers/filter';
import CoinsReducer from '../reducers/coin';
import { detailFilter, changeFilter, addCoin, } from '../Actions/index';

describe('Details Reducer', () => {
  it('It should return the payload', () => {
    const detail = 'Crypto';
    expect(DetailsReducer(undefined, detailFilter(detail))).toBe('Crypto');
  });
});

describe('Filter Reducer', () => {
  it('It should return the payload', () => {
    const filt = 'Filter';
    expect(FilterReducer(undefined, changeFilter(filt))).toBe('Filter');
  });
});

describe('Coins Reducer', () => {
  it('It should return the payload', () => {
    const coin = [1, 2, 3];
    expect(CoinsReducer(undefined, addCoin(coin))).toStrictEqual([1, 2, 3]);
  });

  it('It should not return an empty payload', () => {
    const coin = [null, null, null];
    expect(CoinsReducer(undefined, addCoin(coin))).not.toBeNull();
  });
});
