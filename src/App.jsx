import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import CreatePost from './pages/CreatePost';
import Bookmarks from './pages/Bookmarks';

function App() {
  return (
  <BrowserRouter>
   <div className='body'
      >
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/read/:id' element={<BlogDetails/>}></Route>
    <Route path='/newblog' element={<CreatePost/>}></Route>
    <Route path='/bookmark' element={<Bookmarks/>}></Route>

  </Routes>
    </div>
 
  </BrowserRouter>
  )
}

export default App
