
import './App.css';
import Home from './home';
import Search from './search';
import Library from './library';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' ;





function App() {
  return (
    <Router> 
    <>
     <Switch>
           <Route exact path="/">
                 <Home/>
           </Route>
           <Route path="/search">
                 <Search/>
           </Route>
           <Route path="/library">
                 <Library/>
           </Route>
     </Switch>

    </>
    </Router>
  );
}

export default App;
