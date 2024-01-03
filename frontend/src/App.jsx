import { useEffect, useState} from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [date, setData] = useState([])
  useEffect(()=>{
    axios.get("/api/jock")
      .then((res)=>{setData(res.data)})
      .catch((Error)=>{console.log(`Error man ${Error} 🎈`)})

  },[])

  return (
    <>
    <h1>Most Famous Joks 👌</h1>
    <h2>Joks: {date.length}🫡</h2>
    {date.map((jock)=>(
      <div key={jock.id}>
         
        <h3>{jock.title}</h3>
        <p>{jock.contest}</p>
      
      </div>
    ))}
    </>
  )
}

export default App
