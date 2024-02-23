const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const search = process.argv.slice(2);

request(URL + search, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  const data = JSON.parse(body);

  if (body === '[]') {
    console.log('Breed name not found');
  } else {
    console.log(data[0].description);
  }
});