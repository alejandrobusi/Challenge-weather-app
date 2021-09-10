import React from 'react'
import './aside.css'
import moment from 'moment';
import 'moment/locale/es';
import SideBar from '../SideBar/SideBar';



function Aside(props) {

    moment.locale('es'); // aca ya esta en es
    // console.log('>>>>>>>', moment(test.date).format('MMMM')); //DICIEMBRE POR EJ
    console.log(moment.locale());

    return (
        <div className="col-12 col-sm-4 bg-dark">
            <SideBar weather={props.weather} />
            
        </div>
    )
}

export default Aside
