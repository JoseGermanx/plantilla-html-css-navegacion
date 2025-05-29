
// importar las funciones y componente necesario para crear las rutas
// createBrowsedrRouter y createRoutesFromElements  --> funciones de React Router DOM
// Route es un componente de React Router DOM
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// importar los componentes que se renderizaran en cada ruta

// "/" ---> Home ? import <Home />
// "/post" ---> Detalle ? import <PostDetail />
import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Layout from './pages/Layout'
import List from './pages/List'

// en la constante router queda defino el enrutador
// crea el entutador
export const router = createBrowserRouter(
    // crea las rutas
    createRoutesFromElements(
        // un componente "Route" por cada ruta
        // un ruta que envuelve a otra rutas --> LAYOUT
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/list" element={<List /> } />
        </Route>
    )
)