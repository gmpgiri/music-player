import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import Player from "./Player/Player";
import { getTokenFromUrl } from "./Util/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./Util/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
  console.log("Hi", user);
  console.log("Hi t", token);

  return (
    <div className='app'>
      {token ? <Player /> : <Login />}
      {/* Spotify Logo */}
    </div>
  );
}

export default App;
