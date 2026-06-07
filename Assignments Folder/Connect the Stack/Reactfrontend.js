import {useEffect,useState}
from "react";

function App(){

 const [users,setUsers] =
 useState([]);

 useEffect(()=>{

  fetch(
   "http://localhost:5000/users"
  )
  .then(res=>res.json())
  .then(data=>setUsers(data));

 },[]);

 return(
  <div>

   {users.map((user,index)=>(
    <h2 key={index}>
      {user.name}
    </h2>
   ))}

  </div>
 );
}

export default App;