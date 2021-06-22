import React from "react";
import { Switch,Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
const App = () => {
  return (
    <>
        <Navbar/>
<Switch>
    <Route exact path="/" component={Home}/>
  
 

</Switch>
    </>

  ) 
};

export default App;
