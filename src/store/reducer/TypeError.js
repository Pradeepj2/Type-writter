 const TypeErrorReducer = (state = 0 , action) =>{
    switch(action.type)
    {
        case "TYPE_ERROR":
            return action.payload
        default:
            return state    
    }
 }
 
 export default TypeErrorReducer;