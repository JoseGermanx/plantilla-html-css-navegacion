import { useState, useEffect } from "react";


function Posts() {

    //estado para almacenar la lista, que parte inicialmente vacia
    const [posts, setPosts] = useState([])

 
    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts') // función que realiza la petición http --> y espera por la respuesta
      .then(response => response.json()) // convertimos a json los datos de la respuesta
      .then(json => setPosts(json))  // disponible el json

    },[])

    if (posts.length === 0) return <div> Cargando ...</div>


  return (
    <div>
      <h2>Lista de posts</h2>
      <ul>
        {
            posts.map((post) => (
                <li>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </li>
            ))
        }
      </ul>
    </div>
  );
}

export default Posts;
