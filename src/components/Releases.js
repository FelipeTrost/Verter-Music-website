import React from 'react';

const Releases = ({tracks, trackSelected, reference})=>{
    const releases = tracks.map(value => (
        <div className="flip-card" key={value.id} onClick={() => trackSelected(value.id)}>
            <div className="dummy"></div>
            <div className="content">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <img src={value.cover_medium} />
                </div>
                <div className="flip-card-back">
                    <h3>{value.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    ))

    return <>{releases}</>;
}

export default Releases