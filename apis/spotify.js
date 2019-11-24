//Using the Spotify api and getting the key from keys.js
const keys = require("../keys.js")
let Spotify = require('node-spotify-api');

//let spotify = new Spotify(keys.spotify);
const colors = require("colors")

//SPOTIFY
var spotify = new Spotify({
    id: '63f44b3821444df5b4ed7a6b99aafe8d',
    secret: '18508c2f64dd49bf8e5c466ddf8f4a55'
});

const search_track = (search) => {
    if (!search) {
        search = "Ace of base"
    }
    spotify
        .search({ type: 'track', query: search })
        .then(function (response) {

            for (let i = 0; i < response.tracks.items.length; i++) {
                console.log(colors.rainbow("----------------------------"))
                console.log(`Track: ${response.tracks.items[i].name}`)
                console.log(response.tracks.items[i].artists[0].name);
                console.log(response.tracks.items[i].preview_url ? response.tracks.items[i].preview_url : "I do not see it")
                console.log(response.tracks.items[i].album.name)
                console.log(colors.rainbow("----------------------------"))
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}


module.exports.search_track = search_track
