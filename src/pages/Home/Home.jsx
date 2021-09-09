import React, { useState, useEffect } from 'react'
import axios from "axios";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";

function Home() {
    const [cityWeather, setCityWeather] = useState({})
    const [weaklyWeatherList, setWeaklyWeatherList] = useState([])
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        getLocationCoords()
    }, [])
    
    const getLocationCoords = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const coords = `${position.coords.latitude}, ${position.coords.longitude}`
            getLocationWoeid(coords)
        })
    }

    const getLocationWoeid = async (coords) => {
        try {
            const response = await axios.get(`https://www.metaweather.com/api/location/search/?lattlong=${coords}`)            
            
            const distancesList = response.data.map(number => number.distance);
            // const nearestCityDistance = Math.min(...distancesList)
            // const nearestCity = response.data.filter(city => city.distance === nearestCityDistance)
            // const woeid = nearestCity[0].woeid
            // console.log(response.data[1]);
            const woeid = response.data[1].woeid
            getWeather(woeid)
        } catch (error) {
            console.error(error)
        }
    }

    const getWeather = (woeid) => {
        try {
            // const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`)
            fetch(`https://www.metaweather.com/api/location/${woeid}/`)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    setCityWeather(data)
                    setWeaklyWeatherList(data.consolidated_weather)
                    setLoader(false)
                }
            );

            // console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="row container-fluid ps-0 pe-0 ms-0 me-0">
            {
                loader ? 
                <h2>loading </h2>
                : 
                <>
                    <Aside weather={cityWeather}/>
                    <Main weather={weaklyWeatherList}/>

                </>
            }
            
        </div>
    )
}

export default Home