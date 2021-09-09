import React from 'react'
import '../LittleCards/littleCards.css'

function LittleCards(props) {
  const {weatherInfo, celcius} = props

  return (
      <div className="col-5 col-md-2">
        <div className="card littleBorder mb-3 " >
          <div className="card-header bgLittle text-center text-white littleBorder">{weatherInfo.applicable_date}</div>
          <div className="card-body bgLittle text-warning text-center">
            <span className="material-icons sizeIcon">light_mode</span>
          </div>
          <div className="card-footer d-flex justify-content-between bgLittle littleBorder text-white">
            <span>
              {
                celcius ?
                  `${Math.round(weatherInfo.max_temp)}C°`
                :
                `${Math.round(weatherInfo.max_temp*9/5+32)}F°`
              }
            </span>
            <span>
              {weatherInfo.min_temp}
            </span>
          </div>
        </div>
      </div>
  )
}

export default LittleCards
