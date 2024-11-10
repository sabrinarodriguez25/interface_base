import React from "react";
import '../styles/Card.css'

function Card({ image, title, description }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" /> {/*Devuelve un div  que crea una tarjeta con imagen y titulo   */}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p>{description}</p> {/*Devuelve la descripcion del personaje */}
            </div>
        </div>
    );
}

export default Card;

