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
    
    const tableData = dataAPI.map((element)=>{
        return(
            <tr>
                <th>{element.id.value}</th>
                <th>{element.location.city}</th>
                <th>{element.name.first}{element.name.last}</th>
                <th>Show more</th>
            </tr>
        )
    })

  return (
    <>
    <h3>Data Table</h3>
    <table style={{ border: "1px solid black"}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Location</th>
                <th>Name</th>
                <th>Show more</th>
            </tr>
        </thead>
        <tbody>
            {tableData}
        </tbody>
    </table>
    </>
  )
}

export default DataTable