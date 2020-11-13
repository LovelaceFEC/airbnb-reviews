const faker = require('faker');
const mongoose = require('mongoose');
const Review = require('./review');

const ratingCategories = [
  'cleanliness',
  'communication',
  'check_in',
  'accuracy',
  'location',
  'value'
];

// Generates 10-20 reviews for a given listingId
const generateReviewsPerListing = function(listing_id) {
  let reviews = [];
  let numOfReviews = Math.floor(Math.random() * 10) + 10;

  for (let i = 0; i < numOfReviews; i++) {
    faker.seed(listing_id);
    let review = { listing_id };
    review['date'] = faker.date.past();
    review['reviewer_name'] = faker.name.firstName() + ' ' + faker.name.lastName();
    review['reviewer_picture'] = faker.image.avatar();
    review['comments'] = faker.lorem.paragraphs(Math.floor(Math.random() * 5) + 1);

    for (let i = 0; i < ratingCategories.length; i++) {
      review[ratingCategories[i]] = Math.floor(Math.random() * 5) + 1;
    }
    reviews.push(review);
  }

  Review.insertMany(reviews)
    .then(() => {
      mongoose.connection.close();
    })
    .catch(error => {
      console.log('MongoDB error:', error);
    });
};

const generateReviews = function(numOfListings) {
  for (let i = 0; i < numOfListings; i++) {
    generateReviewsPerListing(i);
  }
};

generateReviews(100);