import React from "react";
import { Link } from "react-router-dom";

import "@/pages/error/Pages404.css";

import MainLayout from "@/components/layout/MainLayout";

const Page404 = () => {

    return (
        <MainLayout>
            <main className="container_404">
                <h1 className="title_404">404</h1>
                <h3 className="subtitle_404">Oups! La page que vous demandez n'existe pas.</h3>
                <Link to="/" className="link_404">
                    Retourner sur la page d'accueil
                </Link>
            </main>
        </MainLayout>
    );
}

export default Page404;


