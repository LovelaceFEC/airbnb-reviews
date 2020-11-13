import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listingId = Math.floor(Math.random() * 100) + 1;
    return (
      <Reviews listingId={listingId} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));