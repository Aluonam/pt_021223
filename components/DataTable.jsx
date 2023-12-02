import React, { useEffect, useState } from 'react'

const DataTable = () => {

    const [dataAPI, setSataAPI] = useState([])

    useEffect(() => {
        try{     
            const apiConsume = async ()=>{
            const url = await fetch(`https://randomuser.me/api/?results=20`);
            const data = await url.json();
            console.log(data.results)
        }
        apiConsume()
        }catch(error){error, "error detected"}
    }, [])
    
  return (
    <div>dataTable</div>
  )
}

export default DataTable