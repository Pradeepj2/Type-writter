export const Show_Wpm = (data) =>{
    return{
        type : "SHOW_WPM",
        payload : data
    }
};
export const Type_error = (data) =>{
    return{
        type : "TYPE_ERROR",
        payload : data
    }
}