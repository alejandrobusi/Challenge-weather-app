import React, { useState, useEffect } from 'react'
import axios from "axios";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";

function Home() {
    const [cityWeather, setCityWeather] = useState({})


    useEffect(() => {
        getLocationWoeid()
    }, [])
    
const getLocationWoeid = async (location="buenos+aires") => {
    try {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=-26.8203499,-65.3061695`)
        // const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${location}`)
        console.log(response.data)
        // const woeid = response.data[0].woeid
        // getWeather(woeid)
    } catch (error) {
        console.error(error)
    }
}

    const getWeather = async (woeid) => {
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
            setCityWeather(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error)
        } finally {
            console.log(cityWeather.title);
        }
    }


    return (
        <div className="row container-fluid ps-0 pe-0 ms-0 me-0">
            <Aside />
            <Main />
        </div>
    )
}

export default Home