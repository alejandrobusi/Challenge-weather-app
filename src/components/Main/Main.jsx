import React, { useState, useEffect } from "react";
import BigCards from "../BigCards/BigCards";
import LittleCards from "../LittleCards/LittleCards";

function Main(props) {
  const [weaklyWeatherList, setWeaklyWeatherList] = useState([])
  const [celcius, setcelcius] = useState(true)
  // console.log('si entro ', props.weather)
  console.log(weaklyWeatherList)
  useEffect(() => {
    setWeaklyWeatherList(props.weather.splice(1))
  }, [])

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
      <div>
        {/* <BigCards firstDay={weaklyWeatherList[0]} key={weaklyWeatherList.id}/> */}
      </div>
    </div>
  );
}

export default Main;
