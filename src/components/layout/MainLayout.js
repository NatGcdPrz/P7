import React from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import "@/components/layout/MainLayout.css";


const MainLayout = ({ children }) => {


    return (
        <div className="container">
            <Header />
            <main className="main_container">
                {children}
            </main>
            <Footer />
        </div>
    );
}



export default MainLayout;