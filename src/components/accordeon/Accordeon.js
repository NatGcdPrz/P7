import React, { useState } from 'react';

import "@/components/accordeon/Accordeon.css";

import ArrowHaut from "@/assets/img/haut.png";
import ArrowBas from "@/assets/img/bas.png";

const Accordeon = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    const handleAccordeon = () => {
        setOpen(!open);
    }

    return (
        <div className="accordeon">
            <div className="accordeon_header">
                <h3 className="accordeon_title">{title}</h3>
                <span onClick={handleAccordeon} >
                    <img src={open ? ArrowHaut : ArrowBas} alt="flèche" className="arrowImg" />
                </span>
            </div>
            {
                open && (
                    <div className="accordeon_content">
                        {children}
                    </div>
                )
            }
        </div>
    )
}

export default Accordeon; 