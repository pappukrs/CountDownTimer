import React from 'react'

const Bottomsheet = ({props,handlesheet}) => {
  return (
    <div   className='bottomsheet-container' onClick={()=>handlesheet(false)}>

        {props.map((Element)=>{
            return (<>
                <h1 style={{color:"white"}}>{Element.name}</h1>
                <p1 style={{color:"white"}}>{Element.age}</p1>
            </>)
        })}
    </div>
  )
}

export default Bottomsheet