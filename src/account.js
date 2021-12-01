import React ,{useRef,useState} from 'react'
import './main.css'

const Account = () => {
     let accountButton = useRef()
      const [color,setColor] = useState('red')

       function drop (e){
        e.preventDefault()
        setColor('blue')
        console.log(color)
       }
    return (
        <div className="dropdown">
                             <button ref={accountButton} className="account-btn"onClick={drop} >
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

                                         <div class="dropblock">
                                             <div class="dropblock-exit">X</div>
                                             <div class="dropblock-text">
                                                        <div>
                                                            Account
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                              </svg>
                                                        </div>
                                                        <div>Profile</div>
                                                        <div>Update to Premium

                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                              </svg>
                                                        </div>
                                                        <div>Log out</div>
                                                      
                            

                                             </div>
                                         </div>
        </div>
    )
}

export default Account
