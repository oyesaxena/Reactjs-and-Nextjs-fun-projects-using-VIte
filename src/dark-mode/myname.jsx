import React, { useState } from "react";
import {  useTheme } from "./context";
import { ThemeProvider } from "./provider";

export const Name=()=>{
    const theme=useTheme();
    console.log('theme',theme)
    return(
    <>
      <div className={theme.value}>
        <span style={{color:'red'}}>Abhishek saxena</span>
        <button onClick={()=>theme.toggleTheme()}>change mode</button>
        </div> 

    </>)
}
