const tmdbURL = Keychain.get("TMDB_URL");
const tmdbAPI = Keychain.get("TMDB_API");
const tmdbSession = Keychain.get("TMDB_Session");
const tmdbImgFront = Keychain.get("TMDB_IMG");
const omdb = Keychain.get("OMDB_API");
const omdbURL = "http://www.omdbapi.com/?i=";

// Create new alert, asking for a movie
var query = new Alert;
query.addTextField("What movie are you searching for?");
query.addAction("OK");
query.title = "Search for a movie";
// Present Alert, asking for movie. Craft search URL from answer
await query.present();
var answer = query.textFieldValue(0);
var encoded = encodeURI(answer);
var url = tmdbURL + "3/search/movie?api_key=" + tmdbAPI + "&query=" + encoded;
// Hit TMDB and return results for search
var search = new Request(url);
var resultsRaw = await search.loadJSON();
var results = resultsRaw["results"];
var chooseMovie = new Alert();
chooseMovie.title = "Which of these is the film you're looking for?";
for (i in results) {
	var movie = results[i];
	var title = movie["title"];
	var year = movie["release_date"].match(/\d{4}/g);
	var option = title + " (" + year + ")";
	chooseMovie.addAction(option); 
}
var chosen = await chooseMovie.present();
var chosenID = results[chosen]["id"];
var url = tmdbURL + "3/movie/" + chosenID + "?api_key=" + tmdbAPI;
var getMovie = new Request(url);
var movie = await getMovie.loadJSON();

let fullURL = omdbURL + movie["imdb_id"] + "&apikey=" + omdb;
let omdbReq = new Request(fullURL);
var omdbRaw = await omdbReq.loadJSON();
var outputRatings = [];
outputRatings.push({"Source": "TMDB", "Value": `${movie["vote_average"]} (${movie["vote_count"]})`});

for (rating of omdbRaw["Ratings"]) {
	outputRatings.push(rating);
}

console.log(outputRatings);

var year = movie["release_date"].match(/\d{4}/g);
let posterURL = tmdbImgFront + movie["poster_path"];

var table = new UITable();
var titleRow = new UITableRow();
titleRow.isHeader;
titleRow.addText(movie["title"] + " (" + year + ")").centerAligned();
table.addRow(titleRow);
var posterRow = new UITableRow();
posterRow.addImageAtURL(posterURL).centerAligned();
posterRow.height = 400;
table.addRow(posterRow);
for (i in outputRatings) {
	this['ratingRow' + i] = new UITableRow();
	this['ratingRow' + i].addText(outputRatings[i]["Source"], outputRatings[i]["Value"]).leftAligned();
	table.addRow(this['ratingRow' + i]);
}

table.present();