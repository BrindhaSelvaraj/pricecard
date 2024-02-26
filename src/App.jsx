import React from 'react';
import ReactDOM from 'react-dom';
import PriceCard from './Components/PriceCard'; // Notice the curly braces
import './App.css';

const features = {
  free: [
    { text: 'Single user', available: true },
    { text: '50 GB data storage', available: true },
    { text: 'Unlimited Public project', available: true },
    { text: 'Community Access', available: true },
    { text: 'Unlimited Private Project', available: false },
    { text: 'Dedicated Phone support', available: false},
    { text: 'Free Subdomain', available: false },
    { text: 'Monthly Status Reports', available: false }
  ],
  plus: [
    { text: 'Single user', available: true },
    { text: '100 GB data storage', available: true },
    { text: 'Unlimited Public project', available: true },
    { text: 'Community Access', available: true },
    { text: 'Unlimited Private Project', available: true },
    { text: 'Dedicated Phone support', available: true},
    { text: 'Free Subdomain', available: true },
    { text: 'Monthly Status Reports', available:false}
  ],
  pro: [
    { text: 'Multiple users', available: true },
    { text: 'Unlimited data storage', available: true },
    { text: 'Unlimited Public project', available: true },
    { text: 'Community Access', available: true },
    { text: 'Unlimited Private Project', available: true },
    { text: 'Dedicated Phone support', available: true},
    { text: 'Free Subdomain', available: true },
    { text: 'Monthly Status Reports', available: true }
  ]
};

function App() {
  return (
    <div className="container">
      <h1>Choose Your Plan</h1>
      <div className="card-container">
        <PriceCard type="Free" price="0" features={features.free} />
        <PriceCard type="Plus" price="9" features={features.plus} />
        <PriceCard type="Pro" price="49" features={features.pro} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
