import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews/Reviews.jsx';

const App = () => {
  let listingId = Math.floor(Math.random() * 100) + 1;

  return (
     <Reviews listingId={listingId} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));