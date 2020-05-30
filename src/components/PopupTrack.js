import React, { useEffect, useState } from 'react';


const PopupTrack = ({track, close}) =>{

    const [songs, setSongs] = useState(false);

    useEffect(()=>{
        document.addEventListener('keyup',keyPress);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://cors-anywhere.herokuapp.com/'+track.tracklist, {signal})
        .then(r => r.json())
        .then(r => setSongs(r.data))

        return ()=> {
            document.removeEventListener("keydown", keyPress, false);
            controller.abort()
        };
    },[])

    const click = e=>{
      if(e.target.className === "overlay") close()
    }
  
    const keyPress = e => {
        if(e.keyCode===27) close()
    }

    return(
    <div id="popup1" className="overlay" onClick={click} >
        <div className="popup" react-html-id="popup">

            <h3>{track.title} <p>{track.release_date}</p></h3>
            <p className="close" onClick={close}>&times;</p>

            <div className="content">
                <img src={track.cover_big} />

                {songs && (
                    <>
                    <h4>Songs:</h4>
                    <ul>
                        {songs.map(song => (
                            <li key={song.id}>
                                <a href={song.link} target="_blank">{song.title} </a>
                            </li>
                        ))}
                    </ul>
                    <br />
                    </>
                )}
                <a href={track.link} target="_blank">Listen to it on Deezer</a>
            
            </div>
        </div>
    </div>
    )
}

export default PopupTrack