import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [dataInput, setDataInput] = useState([]);

    const handleDeleteLastWord = ()=>{
        const sentence = dataInput.split("")
        sentence.pop()
        setDataInput(sentence.join(""))
    }


  return (
    <div>
        
        <h3>Write the sentence</h3>
        <input onChange={(e)=>{setDataInput(e.target.value)}}></input>
        <button onClick={()=>{handleDeleteLastWord()}}>Delete last word</button>
        {dataInput}

    </div>
  )
}

export default DeleteLastWord