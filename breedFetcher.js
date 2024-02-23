const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const search = process.argv.slice(2);

request(URL + search, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else if (body === '[]') {
    console.log('Breed name not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }  
});