 const Wpmreducer = (state = 0 , action) =>{
   switch(action.type)
   {
       case "SHOW_WPM":
           return action.payload
       default:
           return state    
   }
}

export default Wpmreducer;


