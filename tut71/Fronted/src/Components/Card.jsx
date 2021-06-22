import React, { useState } from "react";
import "../css-components/card.css";

import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { data } from "../Data-components/data";

const Card = () => {
  const [state, setState] = useState(true);
  const btnRightClick = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const btnDownClick = () => {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  };
  
  return (
    <>
      <div className="container conts">
        {
        data.map((val,idx)=>{
          return (<>
            <div className="body">
            {
                state?<><div className="img-body">
                <img src={val.img} alt=""/>
            </div>
            <div className="card-element1">
                <h1>{val.title}</h1>
                <span><ArrowDropDownIcon onClick={btnRightClick}/></span>

            </div></>:<><div className="img-body">
                <img src={val.img} alt=""/>
            </div>
             <div className="card-element2">
             <h1>{val.title}</h1>
             <p>{val.para}</p>
             <span><ArrowRightIcon onClick={btnDownClick}/></span>
            </div></>
            }
           
        </div>
          
          
          
          </>)
        })
          }
    </div>
     
    </>
  );
};

export default Card;