import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [dataInput, setDataInput] = useState()


  return (
    <div>
        {dataInput}
        <h3>Write the sentence</h3>
        <input onChange={(e)=>{setDataInput(e.target.value)}}></input>
        <button onClick={()=>{}}>Delete last word</button>
    </div>
  )
}

export default DeleteLastWord