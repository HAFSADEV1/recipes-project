import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Search from './components/Search';
import Home from './components/Home';
import Details from './components/Details';
import Favorite from './components/Favorite';
import {React,useEffect} from 'react'

function App() {
  useEffect(() => {
    
    localStorage.setItem("data",JSON.stringify([]));
  }, [])
  return (
    <Router>
       <div className="App">
         <Switch>
            <Route path="/search/:name" component={Search}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/favorite" component={Favorite}/>
            <Route path="/" component={Home} exact/>
         </Switch>
        </div>
    </Router>
  );
}

export default App;
