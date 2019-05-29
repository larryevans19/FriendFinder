// LOAD DATA
// Link our rates to our data array located on friends.js

const playersData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Request.  Gets the data array located on friends.js

    app.get("/api/friends", function (req, res) {
        res.json(playersData);
    });

    // API POST Requests- Posts the 
    // Then the server saves the data to data array on friends.js after a new player
    // submits their survey form.
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {

        playersData.push(req.body);
        res.json(matchMaker(req.body))
        console.log("res.json:", matchMaker(req.body))
    })
}

//matchMaker function analyzes the compatibility of the newPlayer with each of the players
//in the playersArray to determine the best match, and then returns the match into res.json().
function matchMaker(newPlayer) {
    // Here we then log the waitlistData to console, where it will show up as an object.
    let matchDiff = 1000000;
    let matchIndex = 0;

    // Loop through the array of players
    for (let i = 0; i < playersData.length; i++) {

        let currentScores = playersData[i].scores;
        console.log("currentScores:", currentScores)
        let totalDifference = 0;

        // Loop through the scores of each player and calculate the differences.  Add each differences to the totalDifference.
        for (let x = 0; x < currentScores.length; x++) {
            let difference = Math.abs(newPlayer.scores[x] - currentScores[x]);
            totalDifference += difference;
            console.log("Total Diff:", totalDifference)
        }

        if (totalDifference < matchDiff) {
            matchDiff = totalDifference;
            matchIndex = i;
            console.log("Match Index:", matchIndex)
        }

        let matchPlayer = playersData[matchIndex];
        console.log("matchPlayer:", matchPlayer)
        return matchPlayer;
    }
}

