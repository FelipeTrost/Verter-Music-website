import React, { useEffect, useState } from 'react';
import p5 from "p5";
import "p5/lib/addons/p5.sound";

import mysketch from "../p5Sketch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const PopupTrack = ({ track, close }) => {

    const [songs, setSongs] = useState(false);
    const [myp5, setMyP5] = useState(false)

    useEffect(() => {

        document.addEventListener('keyup', keyPress);

        const controller = new AbortController();
        const signal = controller.signal;

        const p5sketch = new p5(sketch => {
            mysketch(sketch, track.cover_big)
        })
        setMyP5(p5sketch)

        fetch('https://cors-anywhere.herokuapp.com/' + track.tracklist, { signal })
            .then(r => r.json())
            .then(r => {
                setSongs(r.data)
            })

        return () => {
            p5sketch.stop()
            p5sketch.remove()

            document.removeEventListener("keydown", keyPress, false);
            controller.abort()
        };
    }, [])

    const click = e => {
        if (e.target.className === "overlay") close()
    }

    const keyPress = e => {
        if (e.keyCode === 27) close()
    }


    return (
        <div id="popup1" className="overlay" onClick={click} >
            <div className="popup" react-html-id="popup">


                <h3>{track.title} <p>{track.release_date}</p></h3>
                <p className="close" onClick={close}>&times;</p>

                <div className="content">
                    <div id="canvas"></div>
                    <br />
                    {songs && (
                        <>
                            <h4>Songs:</h4>
                            <ul>
                                {songs.map(song => (
                                    <li key={song.id}>
                                        <a href={song.link} rel="noopener noreferrer" target="_blank">{song.title} </a>
                                        <FontAwesomeIcon icon={faPlay} onClick={() => myp5.playSong(song.preview)} />
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <a href={track.link} rel="noopener noreferrer" target="_blank">Listen to it on Deezer</a>

                </div>
            </div>
        </div>
    )
}

export default PopupTrack