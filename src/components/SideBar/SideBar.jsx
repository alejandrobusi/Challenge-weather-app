import React from 'react'
import moment from 'moment'
import '../SideBar/sideBar.css'

function SideBar(props) {
  moment.locale("es")
  const formato = "dddd, MMMM Do YYYY"
  const fecha = moment(props.weather.applicable_date);
  console.log("water" ,props)
  return (
    <div>
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-primary my-3 mx-3 me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Buscar por lugares
        </button>
        <a href="#"><span className="material-icons ms-5 text-white">gps_fixed</span></a>
      </div>
      <div className="d-flex flex-column justity-content-around align-items-center">
        <img className="w-50 my-5" src={`https://www.metaweather.com/static/img/weather/${props.weather.weather_state_abbr}.svg`} alt="" />
        <h1 className="my-5 text-white">
        {/* {
          celcius?
                `${Math.round(props.weather.the_temp)}°C`
                :
                `${Math.round(props.weather.the_temp*9/5+32)}°F`
        } */}15graaa
        </h1>
        <h3 className="my-5 text-white">Shower</h3>
        <h4 className="mt-5 text-white upper">{fecha.format(formato)}</h4>
        <div className="d-flex justify-content-center align-items-center">
          <span class="material-icons text-white">location_on</span>
          <h6 className="my-2 text-white">Buenos Aires</h6>
        </div>
      </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Buscar...</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="dropdown mt-3">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><span className="material-icons">travel_explore</span></span>
              <input type="text" className="form-control" placeholder="Buscar localización" aria-label="Username" aria-describedby="basic-addon1"/>
              <button type="button" className="btn btn-outline-primary">Buscar</button>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default SideBar
