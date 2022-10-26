import Accueil from "@/pages/accueil/accueil";


import Logement from "@/pages/logement/logement";
import Page404 from "@/pages/error/Page404"
import About from "@/pages/about/about";

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Accueil />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/logement/:id",
        element: <Logement />
    },
    {
        path: "*",
        element: <Page404 />
    }
]);


const Router = () => {

    return (
        <RouterProvider router={router} />
    );
}

export default Router;