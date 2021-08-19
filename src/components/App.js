import React, { useEffect } from 'react';
import '../assets/stylesheets/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCoin } from '../actions';
import Coin from './Coin';
import getData from '../util/apiFetch';

function App() {
  const coinList = useSelector((state) => state.addCoin);
  const filtered = useSelector((state) => state.filter);
  const filteredCoins = coinList.filter((coin) => coin.marketCap <= parseInt(filtered, 10) || filtered === 'All');
  const dispatch = useDispatch();

  const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';

  useEffect(() => {
    getData(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch(addCoin(result.coins));
      });
  }, []);

  return (
    <div className="App">
      <ul className="UL">
        {filteredCoins.map((coin) => <Coin key={coin.name} coin={coin} />)}
      </ul>
    </div>
  );
}

export default App;
