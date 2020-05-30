import React, { useState, createRef, forwardRef, useRef, useEffect } from 'react';
import logo from './images/logo.png';

import './App.css';
import './Import.css';

import PopupTrack from './components/PopupTrack';
import SideNav from './components/SideNav'
import Releases from './components/Releases';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSpotify, faApple, faGooglePlay, faSoundcloud } from '@fortawesome/free-brands-svg-icons'

const App = () => {

  const [tracks, setTracks] = useState(false)

  useEffect(()=>{
    fetch('https://api.deezer.com/artist/14379707/albums')
    .then(r => r.json())
    .then(response => setTracks(response.data))
    .catch(err => alert('Error al cargar albumes.'))
  }, [])

  const [sideNav, setSideNav] = useState(false)
  const [popup, setPopup] = useState(false)

  const aboutMe = useRef()
  const releases = useRef()
  const whereTo = useRef()

  const handleMenuSelection = (id)=>{
    switch (id) {
      case 0: //ABOUT ME
        aboutMe.current.scrollIntoView({ behavior: 'smooth'})
        break;
      case 1: //RELEASES
        releases.current.scrollIntoView({ behavior: 'smooth'})
        break;
      case 2: //WHERE TO FIND ME
        whereTo.current.scrollIntoView({ behavior: 'smooth'})
        break;
    }
  }

  const trackSelected = id =>{
    const track = tracks.find( x => x.id == id);

    if(track) setPopup(track)
  }

  const appclick = (e)=>{
    //this also closes the sidenav when a link is clicked
    if(e.target.className != "sideNav" && sideNav) 
      setSideNav(false)
  }

  return (
    // The sideNav has a fixed position so it doesnt matter where we put it
    <div onClick={appclick} className='main' >
      <SideNav handleSelection={handleMenuSelection} close={()=>setSideNav(false)} open={sideNav} />

      { popup  && <PopupTrack  track={popup} close={()=>setPopup(false)} /> }

      <div className="menuBar">
        <FontAwesomeIcon icon={faBars} onClick={ ()=> setSideNav(v => !v)  } />
      </div>

      <img src={logo} className="logo" alt="Logo" />

      <div className="section" ref={aboutMe} >
        <h1>ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <br></br>

      <div className="section" ref={releases}>
        <h1 className="titel">RELEASES</h1>
        <div className="releases">
          {!tracks?(
            <FontAwesomeIcon icon={faSpinner} spin={true} className='spinner' />
          ):(
            <Releases tracks={tracks} trackSelected={trackSelected} />
          )}
        </div>
      </div>

      <div className="section" ref={whereTo} >
          <h1>WHERE TO FIND ME</h1>
          <div className="logos">
            <a target="_blank" href="https://instagram.com/verter_music">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a target="_blank" href="https://open.spotify.com/artist/6H8wsbtJTIAsvbKysRvVFO?si=68wVdV44RdCBUzx3LfZAcA">
              <FontAwesomeIcon icon={faSpotify}/>
            </a>
            <a target="_blank" href="https://music.apple.com/us/artist/verter-music/1360898688">
              <FontAwesomeIcon icon={faApple}/>
            </a>

            <a target="_blank" href="https://play.google.com/store/music/artist/Verter_Music?id=At3s3lycrhahb7cwgjw5niptfn4">
              <FontAwesomeIcon icon={faGooglePlay}/>
            </a>
            <a target="_blank" href="https://soundcloud.com/the_verter">
              <FontAwesomeIcon icon={faSoundcloud}/>
            </a>
          </div>
        </div>

      <footer>

        <div>
          <p>Dev: Felipe Trost</p>
        </div>
        <div>
          <p>Martin Vetter</p>
        </div>

      </footer>

    </div>

  );

}


export default App;
