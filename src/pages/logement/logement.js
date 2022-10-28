import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Accordeon from "@/components/accordeon/Accordeon";
import Title from "@/components/title/Title";
import Tag from "@/components/tag/Tag";
import Profil from "@/components/profil/Profil";
import Stars from "@/components/stars/Stars";
import Carrousel from "@/components/caroussel/Caroussel";
import MainLayout from "@/components/layout/MainLayout";
import LogementService from "@/_services/Logement.service.js";

import "@/pages/logement/logement.css";

const Logement = () => {
    // Hooks react router
    // Permet de changer de page
    const navigate = useNavigate();
    // Permet de récupérer le paramètre "id" dans l'url (défini dans notre fichier route.js)
    let { id } = useParams();

    const [reservation, setReservation] = useState(false);
    const [error, setError] = useState(false);



    useEffect(() => {
        // Appel du service logement , appel de la fonction qui retourne 1 seul logement en lui transmettant id
        LogementService.GetOneLogement(id)
            .then((data) => {
                if (data) {
                    setReservation(data);
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    if (error) {
        navigate('/404');
    }



    /**
     * @param equipments  (tableau qui contient la liste des équipements)
     * @returns affiche la liste des équipements 
     */
    const displayEquipments = (equipments) => {
        if (equipments) {
            return (
                <ul>
                    {equipments.map((equipement, index) => {

                        return (
                            <li key={index}>
                                {equipement}
                            </li>
                        )
                    })}
                </ul>
            )
        }

    }

    /**
     * @param  tags Tableau qui contient les différents tag 
     * @returns affiche les différents tag
     */
    const displayTags = (tags) => {
        if (tags) {
            // Utilisation de la method de tableau MAP, pour boucler autour du tableau

            return (
                <div className="tags_container">
                    {tags.map((tag, index) => {
                        return (
                            <Tag tag={tag} key={index} />
                        )
                    })}
                </div>
            )
        }

    }

    if (!reservation) {
        return (
            <h1>Chargement...</h1>
        )
    }

    return (
        <MainLayout>

            <Carrousel pictures={reservation.pictures} />
            <div className="details_container">
                <div className="details_title_container">
                    <Title title={reservation.title} location={reservation.location} />
                    {displayTags(reservation.tags)}
                </div>
                <div className="details_profil_container">
                    <Profil host={reservation.host} />
                    <Stars rating={reservation.rating} />
                </div>
            </div>
            <div className="accordeon_container">
                <Accordeon title={"Description"} >
                    <p>
                        {reservation.description}
                    </p>
                </Accordeon>
                <Accordeon title={"Équipements"} >
                    {displayEquipments(reservation.equipments)}
                </Accordeon>
            </div>

        </MainLayout>
    );
}

export default Logement;


