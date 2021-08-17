import React from 'react';
// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { detailFilter } from '../actions';
import '../assets/stylesheets/Detail.css';

function Details() {
  // const { name } = props;
  // const coin = useSelector((state) => state.addCoin);
  const coinDetail = useSelector((state) => state.detail);
  // const coinDetail2 = useSelector((state) => state.detailFilter);
  // console.log(`This is coinDetail: ${coinDetail.name}`);//eslint-disable-line
  // console.log(`This is detailFilter: ${detailFilter}`);//eslint-disable-line
  // console.log(`This is coin: ${coin}`);//eslint-disable-line
  // const filteredDetails = coin.filter((coin) => coin.name === coinDetail);
  // const dispatch = useDispatch();

  // function showDetail() {
  //   dispatch(detailFilter(filteredDetails));
  // }

  return (
    <>
      <div className="detail">
        <div className="TitleName">
          <img src={coinDetail.icon} alt="coin logo" />
          <h1 className="TitleName1">{coinDetail.name.toUpperCase()}</h1>
        </div>
        <h1 className="detail2">
          <span className="bullet">
            <span className="bold" id="one">Symbol:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.symbol }
          </span>
          <span className="bullet">
            <span className="bold">Rank:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.rank }
          </span>
          <span className="bullet">
            <span className="bold">Price:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.price }
          </span>
          <span className="bullet">
            <span className="bold">Market Cap:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.marketCap }
          </span>
          <span className="bullet">
            <span className="bold">Total Supply:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.totalSupply }
          </span>
          <span className="bullet">
            <span className="bold">Price Change 1h:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.priceChange1h }
          </span>
          <span className="bullet">
            <span className="bold">Price Change 1d:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.priceChange1d }
          </span>
          <span className="bullet">
            <span className="bold">Price Change 1w:</span>
            &nbsp;&nbsp;&nbsp;
            {coinDetail.priceChange1w }
          </span>
        </h1>
      </div>
    </>
  );
}

// Details.propTypes = { name: PropTypes.string.isRequired };

export default Details;
