import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;


  let getWeatherInfo = async () => {
    try{
let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city:city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      feelsLike: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };
    console.log("Weather Info:", result);
    return result;
    }catch(err){
        throw err;
    }
    
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
     evt.preventDefault();
    setCity(""); // Clear the input after submissioon
    let newInfo = await getWeatherInfo(city);
    updateInfo(newInfo); // Call the updateInfo function passed as a prop
    }catch(err){
        setError(true);
    }
   
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
         {error && <p style={{color:"red"}}>No such Place Exist !</p>}
      </form>
    </div>
  );
}
