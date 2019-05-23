# Scriptable-Scripts
My scripts for the iOS app Scriptable

## Store TMDB Creds
This sets up the keychain in Scriptable to have your API information ready to go so each script doesn't have to have it pasted in. Paste in your TMDB credentials for both v3 and v4 API, including the access and request tokens. It's a bit of a bear, but luckily we only have to do that process the one time. You can find the [documentation on their site](https://developers.themoviedb.org/3/getting-started/introduction).

You'll also need an account over at the [Open Movie Database](https://omdbapi.com). It's much more simple, but they offer far less information. For some of the scripts I haven't released, they don't provide enough. For **Movie Scores**, they actually provide *most* of the data.

## Movie Scores
Search for a movie and the script will return a table with scores from a variety of sources. If possible, it will retrieve:

* TMDB Average (TMDB Total Votes)
* Rotten Tomatoes
* Metascore
* IMDB Average

If any of those ratings are unavailable, they should not display.

As of May 23, the table now also displays runtime in the header. While the new Apple TV app interface saves on clicks, I miss being able to check the runtime of a movie in my library before I start playing it. Figured this script was as good a place as any to accomplish that.