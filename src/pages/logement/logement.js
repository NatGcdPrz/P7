import React from "react";
import "./logement.css";
import Accordeon from "../../components/accordeon/Accordeon";
import Title from "../../components/title/Title";
import { useParams } from "react-router-dom";
import Data from "../../data/logements.json";
import Tag from "../../components/tag/Tag";
import Profil from "../../components/profil/Profil";
import Stars from "../../components/stars/Stars";
import Carrousel from "../../components/caroussel/Caroussel";
import MainLayout from "../../components/layout/MainLayout";
import { useNavigate } from "react-router-dom";

const Logement = () => {

    const navigate = useNavigate();

    const [reservation, setReservation] = React.useState(false);

    let { id } = useParams();

    React.useEffect(() => {

        const logement = Data.find(res => res.id === id);
        console.log(logement);
        if (logement) {
            setReservation(logement);
        }
        else {
            navigate('/404');
        }
    }, [id])


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

    const displayTags = (tags) => {
        if (tags) {
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


