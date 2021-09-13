import React, { useState, useEffect } from "react";
import BigCards from "../BigCards/BigCards";
import LittleCards from "../LittleCards/LittleCards";

function Main(props) {
  const [weaklyWeatherList, setWeaklyWeatherList] = useState([])
  const [celcius, setcelcius] = useState(true)
  // const [dayWeather, setdayWeather] = useState({})

  
  useEffect(() => {
    setWeaklyWeatherList(props.weather.splice(1))
  }, [props.weather])

  const toogleDegree = () => {
    setcelcius(!celcius)
  }
  return (
    <div className="col-12 col-sm-8 bg-light vh-100 ">
      <div className="d-flex justify-content-end mt-5 me-5">
        <button className="btn btn-outline-primary mx-2" onClick={toogleDegree}>°C / °F</button>
        
      </div>
      <div className="row justify-content-center mt-5">
      {
        weaklyWeatherList.map(card => <LittleCards celcius={celcius} key={card.id} weatherInfo={card} />)
      }
      </div>
      <div className="row">
        <BigCards windDirectionCompass={props.weather[0].wind_direction_compass} middleValueNumber={props.weather[0].wind_speed} middleValueText={"mph"} title={"Wind Status"} key={weaklyWeatherList.id} showBottomContent={true} />
        <BigCards middleValueNumber={props.weather[0].humidity} middleValueText={"%"} title={"Humidity"} key={weaklyWeatherList.id} showBottomContent={true} />
        <BigCards middleValueNumber={props.weather[0].visibility} middleValueText={"miles"} title={"Visibility"} key={weaklyWeatherList.id} showBottomContent={false} />
        <BigCards middleValueNumber={props.weather[0].air_pressure} middleValueText={"mb"} title={"Air Pressure"} key={weaklyWeatherList.id} showBottomContent={false} />
      </div>
    </div>
  );
}

export default Main;
