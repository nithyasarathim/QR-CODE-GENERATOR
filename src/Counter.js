import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Counter.css'

const useEffects = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log("Count Render");
    },[count]);
    useEffect(() =>{
        console.log("Time Render");
    },[time]);
    return (
    <div className='container'>
        
        <button className='btn' onClick={() => setCount(count+1)}>+</button>
        <h2 className='val' >{count}</h2>
        <button className='btn' onClick={() => setCount(count-1)}>-</button>
        <div>
            Time : {time}
            <button className='btn' onClick={() => setTime(time+1)}>Inc</button>
        </div>
        
    </div>
   )
}

export default useEffects;
