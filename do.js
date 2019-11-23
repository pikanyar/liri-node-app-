let fs = require('fs');
let spotify = require('./apis/spotify')
let liri = require("./liri")

const search = (name) => {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(',');
        spotify.search_track(dataArr[1]);
    })
}

module.exports.search = search;