import React from 'react'

import spinner from '../../assets/images/spinner.gif';
import './styles.css'


const Spinner = ()=>{
    return (
        <div className="spinner">
            <img src={spinner} alt="Spinner" />
        </div>
    );
}

export default Spinner;