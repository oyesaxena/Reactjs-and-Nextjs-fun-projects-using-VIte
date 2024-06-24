import { useEffect, useState } from "react";
import { ThemeContext } from "./context";

export const ThemeProvider=({children})=>{

     const[isDark,setIsDark]=useState(false);
    const value=isDark?'dark':'light';
    const toggleTheme=()=>{
        setIsDark(!isDark)
    }
    useEffect(()=>{

    },[isDark])
     return(
    <>
        <ThemeContext.Provider value={{value:value,toggleTheme:toggleTheme}}  >
            {children}
        </ThemeContext.Provider>
        </>
     )
}
