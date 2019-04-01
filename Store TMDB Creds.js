// TMDB API Info
Keychain.set("TMDB_API", "--PASTE YOUR API KEY HERE--");
Keychain.set("TMDB_Session", "--PASTE YOUR SESSION KEY HERE--");
Keychain.set("TMDB_Access", "--PASTE YOUR ACCESS KEY HERE--");
Keychain.set("TMDB_Request", "--PASTE YOUR REQUEST KEY HERE--");

// OMDB API Info
Keychain.set("OMDB_API", "--PASTE YOUR OMDB API KEY HERE--");

// TMDB URLs
Keychain.set("TMDB_URL", "https://api.themoviedb.org/");
Keychain.set("TMDB_IMG", "https://image.tmdb.org/t/p/original");

// After you have pasted all of your credentials in, run this script. You should not need to run this script again, but hang on to it for safe keeping, just in case.

let alt = new Alert();
alt.title = "Success!";
alt.message = "We have stashed the credentials!";
alt.present();