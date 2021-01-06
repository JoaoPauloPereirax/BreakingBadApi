import React from 'react';
import './styles.css'

import { Link } from "react-router-dom";



const CharacterItem = ({item})=>{
    return(
    <div className="card">
        <Link to={`/characters/${item.char_id}`} >
        <div className="card-inner">
            <div className="card-front">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className="card-back">
                <h1>{item.name}</h1>
            </div>
        </div>
        </Link>
    </div>
    );
}

export default CharacterItem;