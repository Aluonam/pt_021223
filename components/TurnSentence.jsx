import React, { useState } from 'react'

const TurnSentence = () => {

    const [dataInput, setDataInput] = useState([])
    const [newSentence, setNewSentence] = useState()

    const turnTheSentence = ()=>{
        const arrWords = dataInput.split("").reverse().join("");
        setNewSentence(arrWords)
    }

  return (
    <>
    <h3>Write the sentence</h3>
    <input onChange={(e)=>{setDataInput(e.target.value)}}></input>
    <button onClick={()=>{turnTheSentence()}}>Turn over</button>
    <br/>
    {newSentence}
    </>
  )
}

export default TurnSentence