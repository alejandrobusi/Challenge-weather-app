import React, { useState, useEffect } from 'react'
import axios from "axios";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";
import "../Home/home.css"

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
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${coords}`)            
            
            const distancesList = response.data.map(number => number.distance);
            const woeid = response.data[1].woeid
            getWeather(woeid)
        } catch (error) {
            console.error(error)
        }
    }

    const getWeather = async (woeid) => {
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
            setCityWeather(response.data.consolidated_weather[0])
            setWeaklyWeatherList(response.data.consolidated_weather)
            setLoader(false)
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div className="row container-fluid ps-0 pe-0 ms-0 me-0 home">
            {
                loader ? 
                <div className="d-flex justify-content-center align-items-center vh-100">
                <h1 className="fw-bold loadingTxt">Loading</h1>
                <div class="spinner-border mx-2 loadingLogo"  role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div>
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