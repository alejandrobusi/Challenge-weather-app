import React from 'react'
import './aside.css'
import moment from 'moment';
import 'moment/locale/es';



function Aside() {

    moment.locale('es'); // aca ya esta en es
    // console.log('>>>>>>>', moment(test.date).format('MMMM')); //DICIEMBRE POR EJ
    console.log(moment.locale());

    return (
        <div className="col-12 col-sm-4 bg-dark vh-100">
            <div>
            <button type="button" className="btn btn-secondary">Search for places</button>
            <button type="button" className="btn btn-secondary">
                <span className="material-icons">face</span>
            </button>
            </div>
            <div><p className="testing">holaaa</p></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Aside
