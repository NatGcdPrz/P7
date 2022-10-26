import React, { useState } from 'react';

import "@/components/caroussel/Caroussel.css"

import Right from "@/assets/img/right.png";
import Left from "@/assets/img/left.png";

const Carrousel = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) =>
            prevIndex + 1 === pictures.length ? 0 : prevIndex + 1
        )
    }

    const previousImage = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        )
    }

    const shouldShow = () => {
        return pictures.length > 1
    }

    return (
        <div className="slideshow">
            {shouldShow() &&
                <img className="arrowLeft" src={Left} alt="flèche gauche" onClick={() => previousImage()} />}
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >

                {pictures.map((picture, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ background: `no-repeat center/cover url(${picture})` }}
                    ></div>
                ))}

            </div>
            {shouldShow() &&
                <>
                    <img className="arrowRight" src={Right} alt="flèche droite" onClick={() => nextImage()} />
                    <div className="slideshowDots">
                        {pictures.map((_, idx) => (
                            <div
                                key={idx}
                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></div>
                        ))}
                    </div>
                </>}
        </div>
    )
}

export default Carrousel;

