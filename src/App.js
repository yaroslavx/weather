import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";


export default function App() { 
  
  const [data, setData] = useState({})
  
  const getData = (response) => {
    setData(response)
  }

  return (
    <div className='app'>
      <Search getData={getData}/>
      <div className="container">
        <div className="top">
          <div className="location">
            {(data.name) ? <p>{data.name}</p> : <p>Location</p>}
          </div>
          <div className="temp">
            {(data.main) ? <h1>{data.main.temp.toFixed() + "°C"}</h1> : <h1>Temp</h1>}
          </div>
          <div className="description">
            {(data.weather) ? <p>{data.weather[0].main}</p> : <p>Description</p>}
          </div>
        </div>
        {data.name != undefined && 
          <div className="bottom">
          <div className="feels">
            {(data.main) ? <p>{data.main.feels_like.toFixed() + "°C"}</p> : <p>N/A</p>}
            <>Feels like</>
          </div>
          <div className="humidity">
            {(data.main) ? <p>{data.main.humidity + "%"}</p> : <p>N/A</p>}
            <>Humidity</>
          </div>
          <div className="wind">
            {(data.wind) ? <p>{Math.round(data.wind.speed) + "MS"}</p> : <p>N/A</p>}
            <>Wind speed</>
          </div>
          </div>
        }
      </div>
    </div>
  );
}