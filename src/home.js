import React from 'react'
import './App.css';
import Aside from './aside' ;
import Greet from './greet';
import Player from './player';
// schadrack

const Home = () => {

    return (
        <>
     <div className="container">
                <Aside/>
                
                <div className="main">
                    <div className="Top-bar">
                          <div>
                            <button> back</button>
                            <button> front</button>
                          </div>
                          <div>Right</div>
                    </div>
                    <Greet/>

                </div>
              
     </div>
                <Player/>
        </>
    )
}

export default Home
