import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostDetails from "./PostDetails";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      body: "Lorem ipsum dolor",
      dateTime: "July 01, 2021 11:17:36 AM"
    },
    {
      id: 2,
      title: "My Second Post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "July 01, 2021 11:17:36 AM"
    },
    {
      id: 3,
      title: "My Third Post",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      dateTime: "July 01, 2021 11:17:36 AM"
    }
  ])



  const handleDelete = (id) => {
    setPosts(posts.filter(post => (post.id !== id)))
  }
  return (
    <div className="App">
      <Header />
      <Nav 
      searchText={searchText}
      setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home posts={posts}/>}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/post/:id" element={<PostDetails posts={posts} handleDelete={handleDelete}/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
