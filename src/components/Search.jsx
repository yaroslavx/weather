import axios from "axios";
import { useState } from "react";
import React from "react";
import cl from './Search.module.css'

const Search = ({getData}) => {
    // const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0e79ae228d56b405dc2fcf4c871025db`
  
    const searchCity = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then(response => {
                getData(response.data)
                console.log(response.data)
            })
        }
    } 


    return (
        <div className={cl.container}>
            <input
            className={cl.search} 
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder="Enter location"
            onKeyPress={searchCity}
            type='text'/> 
        </div>
    )
}

export default Search