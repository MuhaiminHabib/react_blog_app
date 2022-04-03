import { Link, useParams } from "react-router-dom";
import Button from './Button';
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
            
            <Button 
                color="white"
                bgColor="red"
                text="Delete Post"
                onClick={() => handleDelete(id)}/>
            <Link to="/">Back to Home Page</Link>
        </main>
    )
}

export default PostDetails;