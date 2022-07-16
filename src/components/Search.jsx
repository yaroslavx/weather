import axios from "axios";
import { useState } from "react";
import React from "react";
import cl from './Search.module.css'

const Search = ({getData}) => {
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0e79ae228d56b405dc2fcf4c871025db`
  
    const searchCity = (e) => {
        if (true) {
            axios.get(url)
            .then(response => getData(response.data))
        }         
    }

    const CleanUP = () => {
        if (document.getElementById('searched').value === '') {
            getData({})
        }
    }
        
    return (
        <div className={cl.container}>
            <input
            id='searched'
            className={cl.search} 
            value={location}
            onChange={e => {setLocation(e.target.value); CleanUP();}}
            placeholder="Enter location"
            onKeyUp={ searchCity}
            type='text'/> 
        </div>

    )
}

export default Search