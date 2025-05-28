import { Link } from "react-router";

const NavBar = () => {
    return (
        <> 
            <header class="title">
               <h1>Nombre de la Aplicación</h1>
            </header>
            <nav class="navbar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/post">Post 1</Link></li>
                    <li><Link to="/post">Post 2</Link></li>
                    <li><Link to="/post">Post 3</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar