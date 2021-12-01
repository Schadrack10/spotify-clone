import React from 'react'
import './App.css';
import Aside from './aside' ;
import Greet from './greet';
import Player from './player';
import './main.css'
import Card from './card';
import Account from './account';

const Home = () => {

    return (
        <>
     <div className="container">
                <Aside/>
                
                <div className="main">
                    <div className="Top-bar">
                          <div>
                            <button> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                               <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            </button>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                              </svg>
                            </button>
                          </div>
                          <div style={{
                               alignItems:"center",
                               justifyContent:"flex-end"
                          }}>
                               <button className="upgrade-btn">upgrade</button>
                               <Account/>
                          </div>
                    </div>
                    <Greet/>
                     <section>
                          <h2><a href="#" className="title">Recently Played</a></h2>
                           <div className="card-wrapper">
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                           </div>
                     </section>
                     <section>
                          <h2><a href="#" className="title">Your top mixes</a></h2>
                           <div className="card-wrapper">
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                           </div>
                     </section>
                     <section>
                          <h2><a href="#" className="title">More like gunna</a></h2>
                           <div className="card-wrapper">
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                           </div>
                     </section>
                     <section>
                          <h2><a href="#" className="title">More like Trippie Redd</a></h2>
                           <div className="card-wrapper">
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                               <Card/>
                           </div>
                     </section>
                </div>
              
     </div>
                <Player/>
        </>
    )
}

export default Home
