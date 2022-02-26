import React, { useEffect,useState } from "react";
import './ParagraphDiv.css';
import {Show_Wpm} from '../store/action/action';
import { Type_error } from "../store/action/action";
import { useDispatch } from "react-redux";
import { Route , Redirect, Switch } from "react-router-dom";
const ParagraphDiv = () =>{
    const str = "India ruling National Democratic Alliance (NDA) put forward Kalam to succeed outgoing President Kocheril Raman Narayanan. Kalam was  nominated by the Hindu nationalist  (Hindutva) NDA even though he was Muslim,  and his stature and popular appeal were  such that even the main opposition party,  the Indian National Congress, also proposed  his candidacy. Kalam easily won the election  and was sworn in as India’s 11th president,  a largely ceremonial post, in July 2002. He  left office at the end of his term in 2007  and was succeeded by Pratibha Patil, the  country’s first woman president.";
    const [err , seterr] = useState(0);
    const [curr , setcurr] = useState("");
    const [fcurr , fsetcurr] = useState("");
    const [addCls , setaddCls] = useState(false);
    const [count , setcount] = useState(60);
    const dispatch = useDispatch();
    const clickEventHandler =  (e) =>{
        let len = e.target.value.length;
        if(len > curr.length)
        {
            if(str[len-1].toLowerCase() !== e.target.value[len-1].toLowerCase())
            {
                seterr(err + 1);
            }
            setcurr(curr + e.target.value[len-1].toLowerCase())
            fsetcurr(curr + e.target.value[len-1].toLowerCase())
        }
        else{
            setcurr(e.target.value);
            fsetcurr(e.target.value);
        }
    }
    useEffect(() => {
        const CountDown = setInterval(() => {
           setcount(count - 1);
        }, 1000);

        if(count === 0)
        {
            dispatch(Show_Wpm(fcurr.length/5))
            dispatch(Type_error(err))
            setaddCls(true)
        }
        return () => clearTimeout(CountDown);
        } , [count]); 

   let finalData =  
   <div>
   <h1 className="heading">TypeWritter</h1>
        <div className="content">
            {str}
        </div>
   <div className="input_div">
       <textarea className = "input" disabled = {addCls} type='text' placeholder="Enter Text" className="input" onChange={e => clickEventHandler(e)} value={curr}></textarea>
   </div>
   <div className="err">
      Typed Errors  = <strong>{err}</strong> 
   </div> 
</div>    

    return(
        <div className="container">
        <div className="count">Time Left :<strong> {count} </strong></div>
        {addCls ? <Redirect exact to= "/Time"/> : finalData}     
        </div>
    )
}
export default ParagraphDiv;