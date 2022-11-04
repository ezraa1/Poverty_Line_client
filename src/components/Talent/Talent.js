import { useState } from "react";
import { Users } from "./users";
import "./app.css";
 import React from 'react'
 import Table from "./Table";
 
 const App = () => {
    const [query, setQuery] = useState('');

    const search = (data) =>{
        return data.filter(item => item.skills.toLowerCase().includes(query))
    }

   return (
     <div className='app' id="talent">
        <h1>Some of the skills set we have are:</h1>
        <input type='text' placeholder='Search for skills available...' className='search' onChange={(e) => setQuery(e.target.value)} />
        <Table data={search(Users)} />
        
     </div>
   )
 }
 
 export default App