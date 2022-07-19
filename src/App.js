import { useEffect } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/player/Player';
import {getTokenFromResponse} from './extenalModule/spotify';
import spotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './extenalModule/DataLayer';

const spotify = new spotifyWebApi();
function App() {
  // context API
  const [{ token }, dispatch] = useDataLayerValue();
  useEffect(()=>{
    let _token = getTokenFromResponse;
    if(_token === "undefined"){
      _token = null;
    }
    window.location.hash = "";
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user,
        });
      });

      spotify.getUserPlaylists("31gxnokijctumin3sj7ra7usroku").then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      });


      spotify.getPlaylist('2B7XwFmitIcye7cM9ioWJf')
      .then((response)=>{
        dispatch({
          type:"FEEL_RELAX_PLAYLIST",
          relaxPlaylist: response
        });
      })
    }
    // eslint-disable-next-line
      },[]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
