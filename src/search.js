import React from 'react'
import './App.css';
import Aside from './aside'
import Player from './player';
import Card from './card'
import Account from './account';


const Search = () => {
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

                               <input type="text" className="search-input" placeholder="Search" />
                             </div>


                             <div style={{
                                  alignItems:"center",
                                  justifyContent:"flex-end"
                             }}>
                                 
                                  <Account/>
                             </div>
                        </div>
                   </div>
                 
        </div>
                   <Player/>
           </>
    )

}

export default Search
