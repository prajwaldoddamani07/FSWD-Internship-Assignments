import { useState } from "react";

function App(){

 const [mood,setMood] = useState("😊");

 return(
  <div>

   <h1>Current Mood: {mood}</h1>

   <button onClick={()=>setMood("😊")}>
      Happy
   </button>

   <button onClick={()=>setMood("😢")}>
      Sad
   </button>

   <button onClick={()=>setMood("😎")}>
      Cool
   </button>

  </div>
 );
}

export default App;