import React from 'react'
import './App.css';
import Aside from './aside' ;
import Player from './player';
// schadrack

const Home = () => {

    return (
        <>
     <div className="container">
                <Aside/>
                
                <div className="main">
                      <h4>home page</h4>
                </div>
              
     </div>
                <Player/>
        </>
    )
}

export default Home
