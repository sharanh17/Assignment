import React, { useState } from 'react'

export const Counter = () => {
    let [count,setCount]=useState(0)
    const handleDecrement=()=>{
      setCount(count+1)
    }
    const  handleIncrement=()=>{
      setCount(count-1)
    }
  return (
 
    <div>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}
