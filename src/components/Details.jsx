import React, { Fragment } from "react";
import cl from './Details.module.css'
import { useState } from "react";


export default function Details({data}) {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = async () => {
    !isActive ? setTimeout(() => setIsOpen(current => !current), 300) : setIsOpen(current => !current);
    setIsActive(current => !current);
  }

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var hours = a.getHours();
    var minutes = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
    var time = hours + ':' + minutes
    return time;
  }

  return (
      <div className={cl.details} onClick={() => {handleClick()}} style={{flex: isActive ? 1 : 0}}>
          <div className={cl.line}></div>
          <div className={cl.bottom}>
              <div className="feels">
                {(data.main) ? <p>{data.main.feels_like.toFixed() + "°C"}</p> : <p>N/A</p>}
                <span>Feels like</span>
              </div>
              <div className="humidity">
                {(data.main) ? <p>{data.main.humidity + "%"}</p> : <p>N/A</p>}
                <span>Humidity</span>
              </div>
              <div className="wind">
                {(data.wind) ? <p>{Math.round(data.wind.speed) + " MS"}</p> : <p>N/A</p>}
                <span>Wind speed</span>
              </div>
          </div>
          {isOpen
          ? 
          <Fragment>
            <div className={cl.bottom}>
              <div className="pressure">
                {(data.main) ? <p>{data.main.pressure.toFixed() + " hPa"}</p> : <p>N/A</p>}
                <span>Pressure</span>
              </div>
              <div className="maxtemp">
                {(data.main) ? <p>{data.main.temp_max.toFixed() + "°C"}</p> : <p>N/A</p>}
                <span>Max temp</span>
              </div>
              <div className="mintemp">
                {(data.main) ? <p>{data.main.temp_min.toFixed() + "°C"}</p> : <p>N/A</p>}
                <span>Min temp</span>
              </div>
            </div>
            <div className={cl.bottom}>
              <div className="extra">
                {(data.weather) ? <p>{data.weather[0].description}</p> : <p>N/A</p>}
                <span>Extra</span>
              </div>
              <div className="sunrise">
                {(data.sys) ? <p>{timeConverter(data.sys.sunrise)}</p> : <p>N/A</p>}
                <span>Sunrise</span>
              </div>
              <div className="sunset">
                {(data.sys) ? <p>{timeConverter(data.sys.sunset)}</p> : <p>N/A</p>}
                <span>Sunset</span>
              </div>
            </div>
          </Fragment>
          : null
          }
      </div>
  )
}