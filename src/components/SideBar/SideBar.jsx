import React, { useState } from 'react'
import '../SideBar/sideBar.css'

function SideBar(props) {
  const [showCitiesList, setShowCitiesList] = useState(false)
  console.log("sidebar: ",props)

  return (
    <div>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-primary my-3 mx-3 me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          Buscar por lugares
        </button>
        <button onClick={props.getLocationCoords}  className="localization-button"><span className="material-icons ms-5 text-white">gps_fixed</span></button>
      </div>
      <img className="w-50" src={`https://www.metaweather.com/static/img/weather/${props.weather.weather_state_abbr}.svg`} alt="" />
      <h1 className="text-white">{props.the_temp}C°</h1>
      <h3 className="text-white">{props.weather.weather_state_name}</h3>
      <h4 className="text-white">Today 15/5/12</h4>
      <h6 className="text-white">Buenos Aires iconito</h6>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Buscar...</h5>
          <button type="button" onClick={()=>props.setCitiesList([])} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="dropdown mt-3">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><span className="material-icons">travel_explore</span></span>
              <input onChange={(e)=> {
                props.searchCityOnChange(e.target.value)
                if (e.target.value.length > 0) {
                  setShowCitiesList(true)
                } else {
                  setShowCitiesList(false)
                }}} type="text" className="form-control" placeholder="Buscar localización" aria-label="Username" aria-describedby="basic-addon1"/>
              <button type="button" className="btn btn-outline-primary">Buscar</button>
            </div>
          </div>
        <ul className="citiesList">
        {props.citiesList.length > 0  ? 
          props.citiesList.map(city => <li className="list-item" onClick={() => {
            props.setLoader(true)
            props.getWeather(city.woeid)
            props.setCitiesList([])
          }} key={city.woeid}>{city.title}</li>) 
          :
          <li>{showCitiesList? "Cargando...": ""}</li>
        }
      </ul>
        </div>
      </div> 
    </div>
  )
}

export default SideBar
