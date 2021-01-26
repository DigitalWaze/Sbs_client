import React from "react";

let state={};
const MyContext = React.createContext({
    state, 
    setState : (state) => {  }
    
});
export default MyContext;