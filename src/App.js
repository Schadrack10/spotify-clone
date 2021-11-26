
import './App.css';
import Home from './home';
import Search from './search';

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom' ;
import Library from './library';





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
