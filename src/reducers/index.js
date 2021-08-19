import { combineReducers } from 'redux';
import CoinsReducer from './coin';
import FilterReducer from './filter';
import DetailsReducer from './detail';

const rootReducer = combineReducers({
  addCoin: CoinsReducer,
  filter: FilterReducer,
  detail: DetailsReducer,
});

export default rootReducer;
