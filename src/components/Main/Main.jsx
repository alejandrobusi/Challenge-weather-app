import React, { useState, useEffect } from "react";
import BigCards from "../BigCards/BigCards";
import LittleCards from "../LittleCards/LittleCards";
import "../Main/main.css"

function Main(props) {
  const [weaklyWeatherList, setWeaklyWeatherList] = useState([])
  // const [dayWeather, setdayWeather] = useState({})

  
  useEffect(() => {
    setWeaklyWeatherList(props.weather.splice(1))
  }, [props.weather])

  
  return (
    <div className="col-12 col-sm-8 bg-light vh-100 ">
      <div className="d-flex justify-content-end my-3 me-5">
        <button className="btn btn-outline-primary mx-2" onClick={props.toogleDegree}>°C / °F</button>
        
      </div>
      <div className="row justify-content-center mt-5">
      {
        weaklyWeatherList.map(card => <LittleCards celcius={props.celcius} key={card.id} weatherInfo={card} />)
      }
      </div>
      <h1 className="text-warning fw-bold text-center">Today's highlight</h1>
      <div className="row justify-content-center mt-5">
        <BigCards nameCard={"Estado del viento"} windDirectionCompass={props.weather[0].wind_direction_compass} middleValueNumber={props.weather[0].wind_speed} middleValueText={"mph"} title={"Wind Status"} key={weaklyWeatherList.id} showBottomContent={true} />
        <BigCards nameCard={"Humedad"} middleValueNumber={props.weather[0].humidity} middleValueText={"%"} title={"Humidity"} key={weaklyWeatherList.id} showBottomContent={true} />
        <BigCards nameCard={"Visibilidad"} middleValueNumber={props.weather[0].visibility} middleValueText={"miles"} title={"Visibility"} key={weaklyWeatherList.id} showBottomContent={false} />
        <BigCards nameCard={"Presión del aire"} middleValueNumber={props.weather[0].air_pressure} middleValueText={"mb"} title={"Air Pressure"} key={weaklyWeatherList.id} showBottomContent={false} />
      </div>
    </div>
  );
}

export default Main;
