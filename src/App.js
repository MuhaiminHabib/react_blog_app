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
  return (
    <div className="App">
      <Header />
      <Nav 
      searchText={searchText}
      setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<NewPost />}></Route>
        <Route path="/post/:id" element={<PostDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
