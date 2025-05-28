import { posts } from '../data/posts'
import { Link } from "react-router";


const Home = () => {

    return (

        <div class="container">
            <header class="header">
                Cristian
            </header>

            <main class="content">
                {
                    posts.map((post)=> (
                        <article class="article">
                            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                            <p>{post.content}</p>
                        </article>
                    ))
                }
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


export default Home