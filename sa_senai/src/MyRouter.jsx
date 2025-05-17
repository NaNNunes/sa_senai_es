import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Sobre from "./pages/Sobre.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import DetalhesCurso from "./pages/DetalhesCurso.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"cadastre-se",
                element:<Cadastro/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/quemsomos",
                element:<Sobre/>
            },
            {
                path:"/cursos/:id",
                element:<DetalhesCurso/>
            }
        ]
    }
]);

export default router;