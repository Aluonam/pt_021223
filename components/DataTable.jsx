import React, { useEffect, useState } from 'react'

const DataTable = () => {

    const [dataAPI, setSataAPI] = useState([])

    useEffect(() => {
        try{     
            const apiConsume = async ()=>{
            const url = await fetch(`https://randomuser.me/api/?results=20`);
            const data = await url.json();
            console.log(data.results)
            setSataAPI(data.results)
        }
        apiConsume()
        }catch(error){error, "error detected"}
    }, [])
    
   

  return (
    <>
    <h3>Data Table</h3>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Location</th>
                <th>Name</th>
                <th>Show more</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <th>Id</th>
                <th>Location</th>
                <th>Name</th>
                <th>Show more</th>
            </tr>
        </tbody>
    </table>
    </>
  )
}

export default DataTable