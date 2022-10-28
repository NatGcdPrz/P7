import React from "react";

import "@/pages/about/about.css";

import MainLayout from "@/components/layout/MainLayout";
import Accordeon from "@/components/accordeon/Accordeon";
import Banner from "@/components/banner/Banner";
import bgBanner from "@/assets/img/banner-about.png";

const About = () => {


    return (
        <MainLayout>

            <Banner img_banner={bgBanner} large={true} />
            <div className="accordeons_container">
                <Accordeon title="Fiabilité" >
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                    </p>
                </Accordeon>
                <Accordeon title="Respect" >
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </p>
                </Accordeon>
                <Accordeon title="Service" >
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                </Accordeon>
                <Accordeon title="Responsabilité" >
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Accordeon>
            </div>

        </MainLayout>
    );
}

export default About;

