import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './ParagraphDiv.css'

const Timeout = () =>{
    const stateWPM = useSelector(state => state.WpmReducer);
    const stateErr = useSelector(state => state.TypeErrorReducer);
    return(
     <div className="result">
     <h1 className="heading">Your Typing Speed is <strong style={{color : "blue"}}> {stateWPM} </strong>WPM</h1>
     <h2 className="heading" style={{color : "red"}}>Typed Error <strong>{stateErr}</strong> </h2>
     <div className="btn">
         <button className="btnnn"><Link exact to = "/" className="link"> Continue Practice </Link></button>
     </div>
     </div>
    )
};

export default Timeout; 