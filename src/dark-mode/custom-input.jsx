import React, { forwardRef, useId, useImperativeHandle } from "react";

const CustomInput=({},ref)=>{

    useImperativeHandle(ref,()=>{
        return {
            console:()=>alert('shit')
        }
    })

    return(
        <>
        <input ref={ref} />
        <button onClick={()=>ref.current.console()}>shit</button>
        </>
    )
}

export default forwardRef(CustomInput);