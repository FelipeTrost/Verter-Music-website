import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let apiTracks = [
  {id:0, name:"test", duration:555, image:"",release_date:"13/4/2020", spotify:"asd", apple_music:"", google_play:"", deezer:"", soundcloud:""},
  {id:1, name:"test", duration:555, image:"",release_date:"", spotify:"", apple_music:"", google_play:"", deezer:"", soundcloud:""},
  {id:2, name:"test", duration:555, image:"",release_date:"", spotify:"", apple_music:"", google_play:"", deezer:"", soundcloud:""},
  {id:3, name:"test", duration:555, image:"",release_date:"", spotify:"", apple_music:"", google_play:"", deezer:"", soundcloud:""},
  {id:4, name:"test", duration:555, image:"",release_date:"", spotify:"", apple_music:"", google_play:"", deezer:"", soundcloud:""}
]

ReactDOM.render(
  <React.StrictMode>
    <App tracks={apiTracks} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
