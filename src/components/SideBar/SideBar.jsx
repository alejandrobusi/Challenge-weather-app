import React from 'react'
import '../SideBar/sideBar.css'

function SideBar() {
  return (
    <div>
      <div className="d-flex align-items-center">
      <button className="btn btn-outline-primary my-3 mx-3 me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Buscar por lugares
      </button>
      <span class="material-icons ms-5">gps_fixed</span>
      </div>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
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
