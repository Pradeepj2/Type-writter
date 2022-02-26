import React from "react";
import ParagraphDiv from "./ParagraphDiv";
import {Route , Switch , Link} from 'react-router-dom'
import Timeout from "./sessionTimeout";

const MainPage = () =>{
    return(
       <Switch>
           <Route exact path = "/Time" component={Timeout}/>
           <Route path = "/" component={ParagraphDiv}/>
       </Switch> 
    )
}

export default MainPage;