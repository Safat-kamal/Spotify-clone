export const userAuthEndPoint = "https://accounts.spotify.com/en/authorize";
const clientId = "59d5ee0897fe45f690bef8b3b85de8c5";
const redirectUrl = "http://localhost:3000/";
// const redirectUrl = "https://spotify-clone-681e3.web.app/";


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


// https://accounts.spotify.com/en/authorize?response_type=token&client_id=adaaf209fb064dfab873a71817029e0d&redirect_uri=https%3A%2F%2Fdeveloper.spotify.com%2Fdocumentation%2Fweb-playback-sdk%2Fquick-start%2F&scope=streaming+user-read-email+user-modify-playback-state+user-read-private&show_dialog=true

export const loginUrl = `${userAuthEndPoint}?response_type=token&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&show_dialog=true`;



const url_string = window.location.hash.split('&')[0].substring(1).split("=");


export const getTokenFromResponse  = decodeURIComponent(url_string[1]);




