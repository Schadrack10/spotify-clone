import React from 'react'
import './main.css'

const Account = () => {
    return (
        <div>
                             <button className="account-btn" >
                                                   <div className="svg-account">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" 
                                                      height="16" fill="currentColor" 
                                                      class="bi bi-person-fill" viewBox="0 0 16 16">
                                                       <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                        </svg>
                                                      
                                                   </div>
                                                      <span className="profile-name">Shakes</span>
  
                                                   <svg style={{
                                                        margin:"0 5px"
                                                   }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" id="down-arrow" class="bi bi-caret-down-fill down-arrow" viewBox="0 0 16 16">
                                                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                    </svg>
                                         </button>
        </div>
    )
}

export default Account
