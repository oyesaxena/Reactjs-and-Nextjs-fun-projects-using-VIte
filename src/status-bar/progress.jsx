import React, { useEffect, useState } from "react";

const ProgressBar=({value})=>{
    console.log('value here',value)
    const [percent,setPercent]=useState(value);
    useEffect(()=>{
        setPercent(Math.min(100,Math.max(0,value))); 
    },[value]);

    return(
        <div className="progress">
            <span>{percent}</span>
            <div style={{width:`${percent}%`,backgroundColor:'green'}}></div>
        </div>
    )
}

export default ProgressBar;