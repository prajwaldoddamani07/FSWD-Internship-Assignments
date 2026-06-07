import { useState } from "react";

function App(){

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleSubmit=(e)=>{
  e.preventDefault();

  if(password.length < 8){
   alert("Weak Password");
   return;
  }

  alert("Signup Successful");
 };

 return(
  <form onSubmit={handleSubmit}>

   <input
    type="email"
    placeholder="Email"
    onChange={(e)=>setEmail(e.target.value)}
   />

   <input
    type="password"
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button>
    Signup
   </button>

  </form>
 );
}

export default App;