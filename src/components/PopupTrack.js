import React, { useEffect } from 'react';

const PopupTrack = ({track, close}) =>{
    useEffect(()=>{
        document.addEventListener("keydown", keyPress, false);

        return ()=> document.removeEventListener("keydown", keyPress, false);
    },[])

    const click = e=>{
      if(e.target.className === "overlay") close()
    }
  
    const keyPress = e => {
      if(e.keyCode===27) close()
    }
  

    const seconds = track.duration % 60;
    const min = (track.duration - seconds) /60;
    const timeString = min+"min "+seconds+"s"

    return(
    <div id="popup1" className="overlay" onClick={click} >
        <div className="popup" react-html-id="popup">

            <h3>{track.name} <p>{track.release_date}</p></h3>
            <p className="close" onClick={close}>&times;</p>

            <div className="content">
                <img src={track.image} />
            <p className="duration">{timeString}</p>
            <h3>Listen to it:</h3>
            <div className="logos">
                <a target="_blank" href={track.spotify}><i className="fab fa-spotify"></i></a>
                <a target="_blank" href={track.apple_music}><i className="fab fa-apple"></i></a>
                <a target="_blank" href={track.google_play}><i className="fab fa-google-play"></i></a>
                <a target="_blank" href={track.soundcloud}><i className="fab fa-soundcloud"></i></a>
                <a target="_blank" href={track.deezer}><i className="fab ">deezer</i></a>
            </div>
            </div>

        </div>
    </div>
    )
}

export default PopupTrack