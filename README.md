# liri-node-app-

## Introduction

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

Search Spotify for songs, Bands in town for concerts and OMBD for movies. 

## Commands to run LIRI

1. node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie

2. node liri.js spotify-this-song '<song name here>'

    This will show the following information about the song in your terminal/bash window

* Artist
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

3. node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

4. node liri.js do-what-it-says

LIRI use the commands listed in random.txt and then call one of LIRI's functions.


## Technologies Used 

* Javascript
* Nodejs
* Node packages
* APIs used
* GitHub


![GitHub Logo](/images/Screenshot1.png)

![GitHub Logo](/images/Screenshot2.png)

![GitHub Logo](/images/Screenshot3.png)





