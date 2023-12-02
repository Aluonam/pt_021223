import React, { useState } from 'react'

const TurnSentence = () => {

    const [dataInput, setDataInput] = useState("")

  return (
    <>
    <h3>Write the sentence</h3>
    <input onChange={(e)=>{setDataInput(e)}}></input>
    <button onClick={()=>{}}>Turn over</button>
    </>
  )
}

export default TurnSentence