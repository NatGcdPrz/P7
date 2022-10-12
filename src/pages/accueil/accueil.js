import React from "react";
import Data from "../../data/logements.json";
import Card from "../../components/card/Card";
import MainLayout from "../../components/layout/MainLayout";
import BannerImg from "../../assets/img/arbre.png";
import Banner from "../../components/banner/Banner";
import "./accueil.css";

const Accueil = () => {

    const [reservations, setReservations] = React.useState([]);

    React.useEffect(() => {

        setReservations(Data);

    }, [])


    return (
        <MainLayout>
            <Banner title="Chez vous, partout et ailleurs" img_banner={BannerImg} />
            <div className="reservations_container">
                {
                    reservations.map((reservation, index) => {
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
