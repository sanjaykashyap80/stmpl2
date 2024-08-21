import React from 'react';
import './BidAdjustment.css';

const BidAdjustment = ({ weather }) => {
  const { temp_c, condition } = weather;
  let suggestion = 'Keep bids at normal level.';

  if (condition.text.includes('Sunny') && temp_c > 25) {
    suggestion = 'Increase bids by 20%.';
  } else if (condition.text.includes('Rainy')) {
    suggestion = 'Decrease bids by 20%.';
  }

  return (
    <div className="bid-adjustment-card">
      <h3>Bid Adjustment Suggestion</h3>
      <p>{suggestion}</p>
    </div>
  );
};

export default BidAdjustment;
