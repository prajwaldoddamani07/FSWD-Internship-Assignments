import { useState } from "react";

function App(){

 const [task,setTask] = useState("");
 const [tasks,setTasks] = useState([]);

 const addTask = () => {
   setTasks([...tasks, task]);
   setTask("");
 };

 const deleteTask = (index)=>{
   const newTasks = tasks.filter(
      (_,i)=>i!==index
   );
   setTasks(newTasks);
 };

 return(
  <div>

   <input
    value={task}
    onChange={(e)=>setTask(e.target.value)}
   />

   <button onClick={addTask}>
      Add
   </button>

   <ul>
    {tasks.map((item,index)=>(
      <li key={index}>
       {item}
       <button
       onClick={()=>deleteTask(index)}>
       Delete
       </button>
      </li>
    ))}
   </ul>

  </div>
 );
}

export default App;