import React from 'react';
import './PriceCard.css';

function PriceCard({ type, price, features }) {
  return (
    <div className="card">
      <h3>{type}</h3>
      <p className="price">${price} per month</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.available ? 'available' : 'not-available'}>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="btn">Subscribe</button>
    </div>
  );
}

export default PriceCard;
