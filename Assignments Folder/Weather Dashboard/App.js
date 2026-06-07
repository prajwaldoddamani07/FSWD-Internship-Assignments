import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {

    try{
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
      );

      const data = await response.json();
      setWeather(data);

    }catch(error){
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Search
      </button>

      {weather && (
        <h2>{weather.name}</h2>
      )}
    </div>
  );
}

export default App;