import React, { useEffect } from 'react'
import { useState } from 'react'
import Bottomsheet from './Bottomsheet'

export const Parent = () => {
const [visible,setVisible]=useState(false)
const handleClick=()=>{
    setVisible(true)
}
useEffect(() => {
  

 
}, [visible])

const handlesheet=(value) => {
  setVisible(value)
}

let arr=[{name:"Adarsh",age:30},{name:"Adi",age:25},{name:"Adi",age:20},{name:"Adi",age:10},{name:"Adi",age:10},{name:"Adi",age:10}]

  return (
    <>
        <button className='btnsheet' onClick={handleClick}>Open Bottomsheet</button>
        {visible? <Bottomsheet props={arr} handlesheet={handlesheet} />:null}
    </>
  )
}
