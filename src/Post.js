import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article>
            <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <h4>{post.dateTime}</h4>
            </Link>
            <p>{post.body.length > 25 ? 
            `${post.body.slice(0, 25)}...`
            : post.body }</p>
        </article>
        
    )
}

export default Post;