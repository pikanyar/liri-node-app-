require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//include the Spotify npm package
var Spotify = require('node-spotify-api');
// Grab the movieName which will always be the third node argument.
var songName = process.argv[2];

/*var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);
node - spotify - api.get(queryUrl).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });*/

var spotify = new Spotify({
    id: < 63f44b3821444df5b4ed7a6b99aafe8d>,
    secret: < 18508c2f64dd49bf8e5c466ddf8f4a55 >
            });

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});

//Client ID 63f44b3821444df5b4ed7a6b99aafe8d
//Client Secret 18508c2f64dd49bf8e5c466ddf8f4a55