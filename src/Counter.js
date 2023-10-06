import React from "react";
import { useState } from "react";
export default function Counter(){
    const[num,setnum]=useState(1);
    function Inc(){
        setnum(num+1)
    }
    function Dec(){
        setnum(num-1)
    }

    return(
        <>
        <div>My number{num}</div>
        <button onClick={Inc}>+</button>
        <button onClick={Dec}>-</button>
    

        </>
    )
}