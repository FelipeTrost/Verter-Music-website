import React from 'react';

const SideNav = ({handleSelection, close, open})=>{
    return(
    <div className="sideNav" style={{
        width: open? '80%' : 0,
    }}>
        <p className="closeNav" onClick={close}>&times;</p>
        <p onClick={() => handleSelection(0) } >ABOUT ME</p>
        <p onClick={() => handleSelection(1) } >RELEASES</p>
        <p onClick={() => handleSelection(2) } >WHERE TO FIND ME</p>
    </div>
    )
}

export default SideNav;