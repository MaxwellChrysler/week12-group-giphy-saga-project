import React from "react";
import Favorites from "../Favorites/Favorites";
import HomePage from "../HomePage/HomePage";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'


function App(props) {
  return (
    <Router> 
    <div>
      <h1>Giphy Search!</h1>
     
        
      <Route exact path = "/">
      <HomePage />
      </Route>
   

      <Route exact path = "/favorites">
      <Favorites/>
      </Route>

      
    </div>
    </Router>
  );
}

export default App;
