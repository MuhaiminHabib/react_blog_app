import { Link, useParams } from "react-router-dom";

const PostDetails = ({posts, handleDelete}) => {

    const {id} = useParams();
    const post = posts.filter(post => ((post.id).toString() === id));
    return (
        <main>
            <article>
                <h1>{post[0].title}</h1>
                <h4>{post[0].dateTime}</h4>
                <p>{post[0].body}</p>
            </article>
            
            <Link to="/">Back to Home Page</Link>
        </main>
    )
}

export default PostDetails;