import React, { useState } from 'react'

const DeleteLastWord = () => {

    const [dataInput, setDataInput] = useState()


  return (
    <div>
        <h3>Write the sentence</h3>
        <input onChange={(e)=>{e.target.value}}></input>
        <button>Delete last word</button>

    </div>
  )
}

export default DeleteLastWord