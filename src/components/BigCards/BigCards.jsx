import React from 'react'
import '../BigCards/bigCards.css'

function BigCards(props) {
  return (
    <div className="col-11 col-md-5 col-lg-5">
      <div className="card littleBorder mb-3 " >
        <div className="card-header bgLittle text-center text-white littleBorder">Wind status</div>
        <div className="card-body d-flex justify-content-center align-items-center bgLittle text-warning text-center">
          <span className="sizeFirst fw-bold">{Math.round(props.middleValueNumber)}</span> 
          <span className="sizeSecond">{props.middleValueText}</span>
        </div>
        {props.showBottomContent ? 
          <div className="card-footer d-flex justify-content-center bgLittle littleBorder text-white">
            {
              props.windDirectionCompass ?
              <>
                <span className="material-icons">explore</span>
                <span className="mx-1">WSW</span>
              </> 
              : 
              <>
                <div><h6>progress bar</h6></div>
              </>
            }
          </div> 
        :
         ""}
      </div>
    </div>
  )
}

export default BigCards
