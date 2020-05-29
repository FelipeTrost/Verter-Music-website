import React from 'react';

const Releases = ({tracks, trackSelected, reference})=>{
    const releases = tracks.map(value => (
        <div className="flip-card" key={value.id} onClick={() => trackSelected(value.id)}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={value.image} />
                </div>
                <div className="flip-card-back">
                <h1>{value.name}</h1>
                <p>Click the track for more</p>
                </div>
            </div>
        </div>
    ))

    return (
    <div className="section" ref={reference}>
        <h1 className="titel">RELEASES</h1>
        <div className="releases">
            {releases}
        </div>
    </div>
    )
}

export default Releases