const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body === '[]') {
      callback('Breed name not found', null);
    } else {
      const data = JSON.parse(body);
      const breedDescription = data[0].description;
      callback(null, breedDescription);
    }  
  });
};

module.exports = {fetchBreedDescription};