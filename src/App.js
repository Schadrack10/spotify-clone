
import './App.css';
import Aside from './aside'
import Main from './main'
import Player from './player';



function App() {
  return (
    <>
    <div className="container">
                <Aside/>
                <Main/>
    </div>
                <Player/>
    </>
  );
}

export default App;
