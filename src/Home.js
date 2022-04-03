import Post from './Post';
const Home = ({ posts }) => {
    return (
        <main>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </main>
    )
}

export default Home;