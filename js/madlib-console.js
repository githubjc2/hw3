// Create New Startup
var xForY = document.getElementById("xForY"); // Global variable used by multiple functions

document.getElementById("create").onclick = function() {
    createStartup();
};

function createStartup() {
    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

    var random1 = Math.floor((Math.random() * startupX.length));
    var random2 = Math.floor((Math.random() * startupY.length));

    var startupPhraseStart = "A startup that is ";
    var startupJoinPhrase = ", but for ";
    var startupCompletePhrase = startupPhraseStart + startupX[random1] + startupJoinPhrase + startupY[random2];

    xForY.innerHTML = startupCompletePhrase;

    console.log(startupCompletePhrase);
};


// Save Favorite Startup
var savedFavorites = new Array; // Global variable used by multiple functions

document.getElementById("save").onclick = function() {
    saveStartup();
};

function saveStartup() {
    document.getElementById("alreadyFavorite").innerHTML = "";
    checkStartup();
};


// Print Favorite Startups
document.getElementById("print").onclick = function() {
    printFavorites();
};

function printFavorites() {
    var printedFavorites = document.getElementById("favorites");

    printedFavorites.innerHTML = savedFavorites.join("<br>");
};

// Check if Startup is already a Favorite
function checkStartup() {
    if (savedFavorites.indexOf(xForY.innerHTML) > -1) {
        document.getElementById("alreadyFavorite").innerHTML = "This startup is already a Favorite.";
    } else {
        savedFavorites.push(xForY.innerHTML);
    }
};