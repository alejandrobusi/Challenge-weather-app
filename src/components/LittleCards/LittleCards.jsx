import React from 'react'
import moment from 'moment'
import '../LittleCards/littleCards.css'
moment.locale("es")

function LittleCards(props) {
  const {weatherInfo, celcius} = props
  const formato = "ddd Do MMM"
  const fecha =moment(weatherInfo.applicable_date)
  return (
      <div className="col-5 col-md-2">
        <div className="card littleBorder mb-3 " >
          <div className="card-header bgLittle text-center text-white littleBorder">{fecha.format(formato)}</div>
          <div className="card-body bgLittle text-warning text-center">
            <span className="material-icons sizeIcon">light_mode</span>
          </div>
          <div className="card-footer d-flex justify-content-around bgLittle littleBorder text-white">
            <span>
              {
                celcius ?
                  `${Math.round(weatherInfo.max_temp)}°C`
                :
                `${Math.round(weatherInfo.max_temp*9/5+32)}°F`
              }
            </span>
            <span>
              {
                celcius?
                `${Math.round(weatherInfo.min_temp)}°C`
                :
                `${Math.round(weatherInfo.min_temp)}°F`
              }
            </span>
          </div>
        </div>
      </div>
  )
}

export default LittleCards
