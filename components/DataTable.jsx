import React, { useEffect, useState } from 'react'

const DataTable = () => {

    const [dataAPI, setSataAPI] = useState([])

    useEffect(() => {
      const apiConsume = async ()=>{
        const url = await fetch(`https://randomuser.me/api/?results=20`);
        const data = await url.json();
        console.log(data.results)
      }
      apiConsume()
    }, [])
    
  return (
    <div>dataTable</div>
  )
}

export default DataTable