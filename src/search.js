import React from 'react'
import './App.css';
import Aside from './aside'
import Player from './player';

const Search = () => {
    return (
        <>
        <div className="container">
            <Aside/>
              <div className="main">
                   <h4>Search page</h4>
              </div>
         </div>
            <Player/>
         
        </>
    )

}

export default Search
