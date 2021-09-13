import React from 'react'
import './aside.css'
import 'moment/locale/es';
import SideBar from '../SideBar/SideBar';



function Aside(props) {

    return (
        <div className="col-12 col-sm-4 bg-dark">
            <SideBar 
            setCitiesList={props.setCitiesList}
            getWeather={props.getWeather}
            setLoader={props.setLoader}
            citiesList={props.citiesList}
            searchCityOnChange={props.searchCityOnChange}
            weather={props.weather} 
            getLocationCoords={props.getLocationCoords}
            />            
        </div>
    )
}

export default Aside
