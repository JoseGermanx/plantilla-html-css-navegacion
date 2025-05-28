
import { posts } from '../data/posts'
import { useParams } from 'react-router-dom'

 const PostDetail = () => {

  const { id } = useParams()

  const post = posts.find((post) => post.id === parseInt(id))


    return (
           <div class="container">
      <header class="header">
          Cristian
      </header>

      <main class="content">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      </main>

      <aside class="sidebar">
        <div>
          <img src="https://picsum.photos/300/200" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            et!
          </p>
        </div>

        <div>
          <img src="https://picsum.photos/300/200" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            et!
          </p>
        </div>

        <div>
          <img src="https://picsum.photos/300/200" alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            et!
          </p>
        </div>
      </aside>

      <div class="related-post">Another post</div>

      <div class="related-post">Another post</div>

      <div class="related-post">Another post</div>

      <div class="related-post">Another post</div>

      <div class="related-post">Another post</div>
      
    </div>
    )

}

export default PostDetail