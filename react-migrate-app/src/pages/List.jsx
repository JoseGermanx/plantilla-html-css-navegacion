import { Link } from "react-router-dom";
import { posts } from "../data/posts";

const List = () => {
  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div>
         <h1 className="mb-4">Lista de Posts</h1>
      </div>
      {/* table define la tabla */}
      <table className="table table-striped table-bordered">
        {/* thead es el encabezado de la tabla */}
        <thead className="table-dark">
            {/* el tr es la fila del cabezado de la tabla */}
          <tr>
            {/* cada th define un columna dentro de la cabecera de la tabla */}
            <th>ID</th>
            <th>Título</th>
            <th>Texto</th>
          </tr>
        </thead>
        {/* tbody es el cuerpo de la tabla */}
        <tbody>
            {/* Cada tr es una fila del cuerpo de la tabla */}
            {/* se renderiza de manera dinámica un tr por cada elemento del array */}
            {
                posts.map((post)=>(
                    <tr key={post.id}>
                        {/* td define una columna en cada fila del cuerpo de la tabla */}
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default List;
