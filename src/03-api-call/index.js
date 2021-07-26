/**
 * Fetch and return information about LukeSkywalker from this endpoint: https://swapi.dev/api/people/1/

The expected output is:

{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "http://swapi.dev/api/planets/1/",
    "films": [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/2/", 
        "http://swapi.dev/api/films/3/", 
        "http://swapi.dev/api/films/6/"
    ], 
    "species": [], 
    "vehicles": [
        "http://swapi.dev/api/vehicles/14/", 
        "http://swapi.dev/api/vehicles/30/"
    ], 
    "starships": [
        "http://swapi.dev/api/starships/12/", 
        "http://swapi.dev/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "http://swapi.dev/api/people/1/"
}
 */

const axios = require('axios');

// test for this api call is failing due to reason that the call is being made to
// https://swapi.dev/api/people/1/ where the snapshot references a call to address
// http://swapi.dev/api/people/1/ as I am not allowed to change the test suite so
// I will leave that as a failing test. However the API call has been made as intended

module.exports = fetchLukeSkywalker = async () => {
  return await axios
    .get('https://swapi.dev/api/people/1/')
    .then(res => res.data);
};
