import React ,{useRef}  from 'react'
import './App.css';
import './main.css' ;
import MiniCard from './mini-card';


const Greet = () => {
    // const header = useRef(null)
      
    // function changeColor(){
    //      console.log('hello')
    //      header.innerHTML += 'hello'
    //   }
      
    return (
        <div className="greet-section">
             <h2  style={{
                  fontSize:25
             }}>Good morning</h2>  
       

          <div className="card-container">
                      <MiniCard/>
                      <MiniCard/>
                      <MiniCard/>
                      
          </div>
          
          <div className="card-container">
                      <MiniCard/>
                      <MiniCard/>
                      <MiniCard/>
          </div>
          
    

        </div>
     

       
    )
}

export default Greet
