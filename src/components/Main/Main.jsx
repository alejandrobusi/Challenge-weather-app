import React, { useState, useEffect } from "react";
import LittleCard from "../LittleCard/LittleCard";

function Main(props) {
  const [weaklyWeatherList, setWeaklyWeatherList] = useState([])

  console.log('si entro ', props.weather)
  useEffect(() => {
    setWeaklyWeatherList(props.weather.splice(1))
  }, [])

  return (
    <div className="col-12 col-sm-8 bg-light vh-100">
      {
        weaklyWeatherList.map(card => <LittleCard key={card.id} weatherInfo={card} />)
      }
    </div>
  );
}

export default Main;
