function gameObject() {
    const object = {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists:"12",
                    steals:"3",
                    blocks:"1",
                    slamDunks:"1"
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists:"12",
                    steals:"12",
                    blocks:"12",
                    slamDunks:"7"
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists:"10",
                    steals:"3",
                    blocks:"1",
                    slamDunks:"15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists:"6",
                    steals:"3",
                    blocks:"8",
                    slamDunks:"5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists:"2",
                    steals:"4",
                    blocks:"11",
                    slamDunks:"1"
                },
            },
        } ,
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists:"1",
                    steals:"2",
                    blocks:"7",
                    slamDunks:"2"
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists:"7",
                    steals:"7",
                    blocks:"15",
                    slamDunks:"10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists:"12",
                    steals:"4",
                    blocks:"5",
                    slamDunks:"5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists:"2",
                    steals:"1",
                    blocks:"1",
                    slamDunks:"0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists:"12",
                    steals:"22",
                    blocks:"5",
                    slamDunks:"12"
                },
            }
        }
    };
    return object;
};


function numPointsScored(playerName) {
    const object = gameObject();
    if (playerName in object.home.players) {
        return object.home.players[playerName].points;
    }
    if (playerName in object.away.players) {
        return object.away.players[playerName].points;
    }
    return "Player not found";
}
console.log(numPointsScored("Ben Gordon"));

function shoeSize(playerName) {
    const object = gameObject();
    if (playerName in object.home.players) {
        return object.home.players[playerName].shoe;
    }
    if (playerName in object.away.players) {
        return object.away.players[playerName].shoe;
    }
    return "Player not found";
}

console.log(shoeSize("Ben Gordon"));

function teamColors(teamName){
    const object = gameObject();
    if (teamName === object.home.teamName) {
        return object.home.colors
    }
    if (teamName === object.away.teamName) {
        return object.away.colors
    }
    return "Team not found";
}

console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    let object = gameObject()
    let name1 = object.home.teamName
    let name2 = object.away.teamName
    console.log([name1, name2])
    }

teamNames()

function playerNumbers(teamName) {
    const object = gameObject()  
    let homeTeam = object.home.teamName;
    let awayTeam = object.away.teamName;
    if (teamName === homeTeam) {
        let homePlayers = object.home.players;
        let numbers = []
        for (let player in homePlayers) {
            numbers.push(homePlayers[player].number)
        }
        return numbers
    }
    if (teamName === awayTeam) {
        let awayPlayers = object.away.players
        let numbers = []
        for (let player in awayPlayer) {
            numbers.push(awayPlayers[player].number)
        }
        return numbers
    }
}

console.log(playerNumbers("Brooklyn Nets"))

function playerStats(playerName) {
    const object = gameObject();
    if (object.home.players[playerName])
        console.log(object.home.players[playerName])
    if (playerName === object.away.players[playerName])
        console.log(object.away.players[playerName])
}

playerStats("Alan Anderson")

function bigShoeRebounds() {
    const object = gameObject() 
    let biggestShoeSize = 0;
    let playerWithBiggestShoeSize;
    for (let player in object.home.players)
        if (parseInt(object.home.players[player].shoe) > biggestShoeSize) {
            biggestShoeSize = parseInt(object.home.players[player].shoe);
            playerWithBiggestShoeSize = player;
        }
    
    for (let player in object.away.players)
        if (parseInt(object.away.players[player].shoe) > biggestShoeSize) {
            biggestShoeSize = parseInt(object.away.players[player].shoe);
            playerWithBiggestShoeSize = player;
        }

    console.log(object.home.players[playerWithBiggestShoeSize].rebounds);
}
bigShoeRebounds()