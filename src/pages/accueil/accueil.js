import React from 'react';

import "@/pages/accueil/accueil.css";

import Card from "@/components/card/Card";
import MainLayout from "@/components/layout/MainLayout";
import BannerImg from "@/assets/img/arbre.png";
import Banner from "@/components/banner/Banner";

import LogementService from "@/_services/Logement.service.js";

const Accueil = () => {

    return (
        <MainLayout>
            <Banner title="Chez vous, partout et ailleurs" img_banner={BannerImg} />
            <div className="reservations_container">
                {
                    LogementService.GetAllLogement().map((reservation, index) => {
                        return (
                            <Card title={reservation.title} image={reservation.cover} id={reservation.id} key={index} />
                        )
                    })
                }
            </div>
        </MainLayout>
    );
}



export default Accueil;
