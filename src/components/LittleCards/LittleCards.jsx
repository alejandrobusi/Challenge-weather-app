import React from 'react'
import '../LittleCards/littleCards.css'
function LittleCards() {
  return (
    <div className="row">
      <div className="col-5 col-md-1 col-lg-1">
        <div className="card littleBorder mb-3 " >
          <div className="card-header bgLittle text-center text-white littleBorder">Tomorrow</div>
          <div className="card-body bgLittle text-warning text-center">
            <span className="material-icons sizeIcon">light_mode</span>
          </div>
          <div className="card-footer d-flex justify-content-between bgLittle littleBorder text-white">
            <span>15°C</span>
            <span>18°C</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LittleCards
