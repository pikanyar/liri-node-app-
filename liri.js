require("dotenv").config();
let keys = require("./keys.js");
//include the Spotify npm package
let axios = require('axios');
let fs = require('fs');
let moment = require('moment');
const spotify = require("./apis/spotify");
const omdb = require("./apis/omdb");
const concert = require("./apis/concert");
const doThis = require("./do");
const colors = require("colors")
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create an empty variable for holding the movie/song/concert name
var name = "";
// Loop through all the words in the node argument
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        name = name + " " + nodeArgs[i];
    } else {
        name += nodeArgs[i];
    }
}


function run(term) {
    switch (term) {
        case "movie-this":
            omdb.search(name);
            break;
        case "spotify-this":
            spotify.search_track(name);
            break;
        case "concert-this":
            concert.search(name);
            break;
        case "do-what-it-says":
            doThis.search(name);
            break;
        default:
            console.log("No search found");
            break;
    }
}

run(process.argv[2])

module.exports.run = run;
//module.exports.nodeArgs = nodeArgs