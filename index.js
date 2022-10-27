// index.js
const { fetchMyIP, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


fetchMyIP((error, ip) => {

  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIp('68.148.44.68', (error, coordinates) => {

  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});


fetchISSFlyOverTimes({ latitude: 53.544389, longitude: -113.4909267 }, (error, data) => {

  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returns flyover times: ', data);
});


// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });
