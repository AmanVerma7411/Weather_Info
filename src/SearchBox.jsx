import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false); 
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="d9ac2358b099768cd9dfa6a49474e0d4";
    let getWeatherInfo=async(city)=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.temp_min,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
        
    };
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
    console.log(city);
    let newInfo = await getWeatherInfo(city);
    updateInfo(newInfo);
    setCity("");
    setError(false);
  } catch (err) {
    setError(true);
  }
};

    return(
        <div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="city Name" variant="outlined" required value={city} onChange={handleChange}  />
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
        {error && <p style={{color:"red"}}>No such place exits!</p>}
        </form>
        </div>
    );
}