import React from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/Coin.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailFilter } from '../actions';

function Coin(props) {
  const dispatch = useDispatch();
  const { coin } = props;
  const { name } = coin.name;

  function sendInfo(load) {
    dispatch(detailFilter(load));
  }

  return (
    <li className="item">
      <Link className="Link item" coin={name} onClick={() => sendInfo(coin)} to={`/Details/${coin.name}`}>
        <span>
          <h1>
            <img src={coin.icon} alt="coin" width="45px" />
            {coin.name}
          </h1>
        </span>
        <h1>
          Market Cap:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {coin.marketCap}
        </h1>
      </Link>
    </li>
  );
}

Coin.propTypes = { coin: PropTypes.instanceOf(Object).isRequired };

export default Coin;
