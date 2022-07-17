import React from "react";
import { useState } from "react";
import Search from "../components/Search";
import Details from "../components/Details";
import { Link } from "react-router-dom";

export default function Main() { 
  
    const [data, setData] = useState({})
    
    const getData = (response) => {
      setData(response)
      console.log(data)
    }
  
    return (
      <div className='main'>
        {/* <div><Link to='/maps'className="lnk">maps</Link></div> */}
        <Search getData={getData}/>
          <div className="container">
            <div className="top">
              <div className="location">
                {(data.name) ? <p>{data.name}</p> : <div className="blanc">Location</div>}
              </div>
              <div className="temp">
                {(data.main && data.weather) ? <div style={{display:"flex", alignItems:"center"}}><h1>{data.main.temp.toFixed() + "°C"}</h1><img src={`http://openweathermap.org/img/wn/10n@4x.png`}/></div>: <div style={{display:"flex", alignItems:"center"}}><div className="blanc_h1">Temp</div><div style={{width:"200px", height:"200px"}}></div></div>}
              </div>
              <div className="description">
                {(data.weather) ? <p>{data.weather[0].description}</p> : <div className="blanc">Description</div>}
              </div>
            </div>
            {data.name != undefined && 
              <Details data={data}/>
            }
          </div>
      </div>
    );
  }