import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostDetails from "./PostDetails";
import { Router, Routes, Route, useHistory} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
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
