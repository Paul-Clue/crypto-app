import DetailsReducer from '../reducers/detail';
import FilterReducer from '../reducers/filter';
import CoinsReducer from '../reducers/coin';
import { detailFilter, changeFilter, addCoin, } from '../Actions/index';

describe('Details Reducer', () => {
  it('It should return the payload', () => {
    const detail = 'Crypto';
    expect(DetailsReducer(undefined, detailFilter(detail))).toBe('Crypto');
  });

  it('It should not return an empty payload', () => {
    const detail = null;
    expect(DetailsReducer(undefined, detailFilter(detail))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const detail = null;
    expect(DetailsReducer(undefined, detailFilter(detail))).toBe('All');
  });
});

describe('Filter Reducer', () => {
  it('It should return the payload', () => {
    const filt = 'Filter';
    expect(FilterReducer(undefined, changeFilter(filt))).toBe('Filter');
  });

  it('It should not return an empty payload', () => {
    const filt = null;
    expect(FilterReducer(undefined, changeFilter(filt))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const detail = null;
    expect(DetailsReducer(undefined, detailFilter(detail))).toBe('All');
  });
});

describe('Details Reducer', () => {
  it('It should return the payload', () => {
    const detail = 'Crypto';
    expect(DetailsReducer(undefined, detailFilter(detail))).toBe('Crypto');
  });

  it('It should not return an empty payload', () => {
    const detail = null;
    expect(DetailsReducer(undefined, detailFilter(detail))).not.toBeNull();
  });

  it('It should return the initial state', () => {
    const detail = null;
    expect(DetailsReducer(undefined, detailFilter(detail))).toBe('All');
  });
});
