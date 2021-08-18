import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/stylesheets/Detail.css';

function Details() {
  const coinDetail = useSelector((state) => state.detail);

  return (
    <>
      <div className="detail">
        <div className="TitleName">
          <img src={coinDetail.icon} alt="coin logo" />
          <h1 className="TitleName1">{coinDetail.name}</h1>
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

export default Details;
