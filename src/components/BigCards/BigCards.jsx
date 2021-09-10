import React from 'react'
import '../BigCards/bigCards.css'

function BigCards(props) {
  const {firstDay} = props
  return (
    <div className="col-11 col-md-2 col-lg-2">
      <div className="card littleBorder mb-3 " >
        <div className="card-header bgLittle text-center text-white littleBorder">Wind status</div>
        <div className="card-body d-flex justify-content-center align-items-center bgLittle text-warning text-center">
          <span className="sizeFirst fw-bold">7</span>
          <span className="sizeSecond">mph</span>
        </div>
        <div className="card-footer d-flex justify-content-center bgLittle littleBorder text-white">
          <span className="material-icons">explore</span>
          <span className="mx-1">WSW</span>
        </div>
      </div>
    </div>
  )
}

export default BigCards
