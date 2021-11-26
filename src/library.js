import React from 'react'
import './App.css';
import Aside from './aside'
import Player from './player';

const Library = () => {
    return (
        <>
        <div className="container">
            <Aside/>
              <div className="main">
                   <h4>library-page</h4>
              </div>
         </div>
            <Player/>
        
        </>
    )
}

export default Library
