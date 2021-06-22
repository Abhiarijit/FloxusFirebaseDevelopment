import React from 'react';
import "../css-components/home.css";
import Card from "./Card";

const Home = () => {
  
    return (
      <>
      
      <div className="container cont">
        <div className="box">

        <div className="element1">
          <h1 className="head1">We build you</h1>
        </div>
        <div className="element2">
          <h1 className="head2">NEXT WORLD</h1>
        </div>
        <div className="element3">
          <p>We never core about you but we care about the next journey of your future world</p>
        </div>
        <div className="element4">
          <button className="btns">Be a member</button>
        </div>
        </div>

  
      </div>
      <Card/>

      
      </>
    )
}

export default Home;
