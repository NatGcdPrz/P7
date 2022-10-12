import Accueil from "./pages/accueil/accueil";
import "./main.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Logement from "./pages/logement/logement";
import Page404 from "./pages/error/Page404"
import About from "./pages/about/about";
/**
 * 
 * @Props 
 * Permet de faire passer des paramètres entre les composants (uniquement du parent vers l'enfant)
 */

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


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
