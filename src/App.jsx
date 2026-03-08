import { use, useState } from 'react'
import { useEffect } from 'react'

function Welcome(props) {
  return <h1>Welcome {props.name}</h1>
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nishanth");
  const [users,setUser] = useState([]);
  const fruits = ["apple", "banana", "grapes", "orange"];
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUser(data))
  },[]);

  return (
    <div>
      <h1>Counter app</h1>
      <p>Count : {count}</p>
      <input 
        type="number"
        value = {count}
        onChange={(e)=>setCount(Number(e.target.value))}
        />
      <input
        type="text"
        value = {name}
        onChange = {(e)=>setName(e.target.value)}
        />
      <button onClick={() => setCount(count+1)}> Increment </button>
      <button onClick={() => {if(count>0){setCount(count-1)}}}> Decrement </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={() => setCount(count+5)}> Increment by 5 </button>
      <Welcome name={name}/>
      <p>{count==0 ? "start counting!" : "continue counting"}</p>
      <p>{count>=10 && "high number"}</p>
      {fruits.map((fruit,index) => <p key={index}>I have {fruit}</p>)}
      {users.map(user => <p key = {user.id}> {user.name}</p>)}
      
    </div>
  )
}


export default App
