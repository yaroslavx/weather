import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import { CSSTransition } from "react-transition-group";


export default function App() { 
  
  const [data, setData] = useState({})
  
  const getData = (response) => {
    setData(response)
    console.log(data)
  }

  return (
    <div className='app'>
      <Search getData={getData}/>
        <div className="container">
          <div className="top">
            <div className="location">
              {(data.name) ? <p>{data.name}</p> : <div className="blanc">Location</div>}
            </div>
            <div className="temp">
              {(data.main) ? <h1>{data.main.temp.toFixed() + "°C"}</h1> : <div className="blanc_h1">Temp</div>}
            </div>
            <div className="description">
              {(data.weather) ? <p>{data.weather[0].main}</p> : <div className="blanc">Description</div>}
            </div>
          </div>
          {data.name != undefined && 
            <div className="bottom">
            <div className="feels">
              {(data.main) ? <p>{data.main.feels_like.toFixed() + "°C"}</p> : <p>N/A</p>}
              <span>Feels like</span>
            </div>
            <div className="humidity">
              {(data.main) ? <p>{data.main.humidity + "%"}</p> : <p>N/A</p>}
              <span>Humidity</span>
            </div>
            <div className="wind">
              {(data.wind) ? <p>{Math.round(data.wind.speed) + "MS"}</p> : <p>N/A</p>}
              <span>Wind speed</span>
            </div>
            </div>
          }
        </div>
    </div>
  );
}