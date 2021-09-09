import React, { useState, useEffect } from "react";
import LittleCards from "../LittleCards/LittleCards";

function Main(props) {
  const [weaklyWeatherList, setWeaklyWeatherList] = useState([])
  const [celcius, setcelcius] = useState(true)
  // console.log('si entro ', props.weather)
  useEffect(() => {
    setWeaklyWeatherList(props.weather.splice(1))
  }, [])

  const toogleDegree = () => {
    setcelcius(!celcius)
    console.log(celcius)
  }
  return (
    <div className="col-12 col-sm-8 bg-light vh-100 ">
      <button onClick={toogleDegree}>Celcius</button>
      <button onClick={toogleDegree}>Farenheit</button>
      <div className="row justify-content-center mt-5">
      {
        weaklyWeatherList.map(card => <LittleCards celcius={celcius} key={card.id} weatherInfo={card} />)
      }
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Main;
