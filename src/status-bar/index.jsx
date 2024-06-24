import React, { useEffect, useState } from "react";
import ProgressBar from './progress';
const StatusBar=()=>{
    const[value,setValue]=useState(0);

    useEffect(()=>{
        const t=setInterval(() => {
            setValue((value)=>value+1)
        }, 500);
        return ()=>clearInterval(t)
    })

    return(
        <div>
            <span>status check</span>
            <ProgressBar value={value} />
        </div>
    )
}

export default StatusBar;