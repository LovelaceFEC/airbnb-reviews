import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      totalRating: 0,
      cleanliness: 0,
      communication: 0,
      check_in: 0,
      accuracy: 0,
      location: 0,
      value: 0
    };
  };

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: `/api/reviews/${this.props.listingId}`,
      processData: false,
      contentType: 'application/json',
      success: (results) => {
        let cleanliness = 0;
        let communication = 0;
        let check_in = 0;
        let accuracy = 0;
        let location = 0;
        let value = 0;

        for (let i = 0; i < results.length; i++) {
          cleanliness += results[i].cleanliness;
          communication += results[i].communication;
          check_in += results[i].check_in;
          accuracy += results[i].accuracy;
          location += results[i].location;
          value += results[i].value;
        }

        let totalRating = (cleanliness + communication + check_in + accuracy + location + value) / (6 * results.length);
        this.setState({
          reviews: results,
          totalRating,
          cleanliness: cleanliness / results.length,
          communication: communication / results.length,
          check_in: check_in / results.length,
          accuracy: accuracy / results.length,
          location: location / results.length,
          value: value / results.length
        });
      }
    });
  }

  render() {

    return (
      <div>
        <h2>{this.state.totalRating.toFixed(1)} ({this.state.reviews.length} Reviews)</h2>
        <div>
          <div>Cleanliness: {this.state.cleanliness.toFixed(1)}</div>
          <div>Communication: {this.state.communication.toFixed(1)}</div>
          <div>Check-in: {this.state.check_in.toFixed(1)}</div>
          <div>Accuracy: {this.state.accuracy.toFixed(1)}</div>
          <div>Location: {this.state.location.toFixed(1)}</div>
          <div>Value: {this.state.value.toFixed(1)}</div>
        </div>
        <div>
          {this.state.reviews.map((review, index) =>
            <Review review={review} key={review._id} />
          )}
        </div>
      </div>
    );
  }
}

export default Reviews;