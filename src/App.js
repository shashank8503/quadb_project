import React from 'react'
import Home from "./Home";
import { BrowserRouter as Router, Switch,Route, BrowserRouter } from "react-router-dom";

import Header from './Header';
import Time from './Time';
import Data from './Data';





function App() {
  return (
    <Router>
       <div className="app">


       

     
     <Switch>
     <Route path="/">
           <Header/>
           
           <Home/>
              
           </Route>
     </Switch>
       
         
           
         
         

        
      
      
      
      </div>
    </Router>
    
    
  );
}

export default App;
