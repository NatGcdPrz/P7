import "./about.css";
import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import Accordeon from "../../components/accordeon/Accordeon";
import Banner from "../../components/banner/Banner";
import bgBanner from "../../assets/img/banner-about.png";

const About = () => {


    return (
        <MainLayout>

            <Banner img_banner={bgBanner} large={true} />
            <div className="accordeons_container">
                <Accordeon title="Fiabilité" >
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Accordeon>
                <Accordeon title="Respect" >
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Accordeon>
                <Accordeon title="Service" >
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Accordeon>
                <Accordeon title="Responsabilité" >
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Accordeon>
            </div>

        </MainLayout>
    );
}

export default About;

