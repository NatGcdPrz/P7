import React from "react";
import "./Card.css"
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, id }) => {

    const navigate = useNavigate();


    return (
        <article
            className="thumbnail" style={{
                background: `linear-gradient(180deg, rgba(2,0,36,0) 47%, rgba(0,0,0,0.8029412448573179) 100%),
            center/cover url(${image})
            `
            }} onClick={() => navigate(`/logement/${id}`)} >
            <h3 className="thumbnail__title">{title}</h3>
        </article>

    )
}

export default Card;