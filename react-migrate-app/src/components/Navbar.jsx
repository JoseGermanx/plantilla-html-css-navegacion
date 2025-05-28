import { Link } from "react-router";
import { posts } from "../data/posts";

const NavBar = () => {
    return (
        <> 
            <header class="title">
               <h1>Nombre de la Aplicación</h1>
            </header>
            <nav class="navbar">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    {
                        posts.map((post) => (
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`}>Post {post.id}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default NavBar