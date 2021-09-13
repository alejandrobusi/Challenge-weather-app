import React, { useState, useEffect } from 'react'
import axios from "axios";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";

function Home() {
    const [cityWeather, setCityWeather] = useState({})
    const [weaklyWeatherList, setWeaklyWeatherList] = useState([])
    const [loader, setLoader] = useState(true)
    const [timeoutId, setTimeoutId] = useState(null)
    const [citiesList, setCitiesList] = useState([])


    useEffect(() => {
        getLocationCoords()
    }, [])
    
    const getLocationCoords = async () => {
        setLoader(true)
        navigator.geolocation.getCurrentPosition(function(position) {
            const coords = `${position.coords.latitude}, ${position.coords.longitude}`
            getLocationWoeid(coords)
        })
    }

    const getLocationWoeid = async (coords) => {
            try {
                    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${coords}`)
                    const woeid = response.data[1].woeid
                    getWeather(woeid)
            } catch (error) {
                console.error(error)
            }
    }
    
    const getWeather = async (woeid) => {
        try {
            const response = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`)
            console.log(response.data)
            setCityWeather(response.data.consolidated_weather[0])
            setWeaklyWeatherList(response.data.consolidated_weather)
            setLoader(false)
        } catch (error) {
            console.error(error)
        }
    }

    const getLocationCitiesList = async (city) => {
        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`)
            if (response.data.length === 0) {
            setCitiesList([])
            console.log('entro por lista vacía ', citiesList)
            return
            }
            setCitiesList(response.data)
        } catch (error) {
            console.error("error en getocationWoeid: " , error)
        }
    }
    

    const searchCityOnChange = (value) => {
        clearTimeout(timeoutId)
        let cityTimeOutSearch = setTimeout(() => {
            getLocationCitiesList(value)
            console.log(value)
        }, 1500);
        setTimeoutId(cityTimeOutSearch)
    }

    return (
        <div className="row container-fluid ps-0 pe-0 ms-0 me-0">
            {
                loader ? 
                <h2>loading </h2>
                : 
                <>
                    <Aside 
                    getWeather={getWeather}
                    setLoader={setLoader}
                    citiesList={citiesList}
                    setCitiesList={setCitiesList}
                    searchCityOnChange={searchCityOnChange}
                    weather={cityWeather}
                    getLocationCoords={getLocationCoords}
                    />
                    <Main weather={weaklyWeatherList}/>

                </>
            }
            
        </div>
    )
}

export default Home