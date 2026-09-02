import React from 'react'
import BlogCard from '../components/BlogCard'
import BlogForm from '../components/BlogForm'
import {useAtom} from 'jotai'
import { blogAtom } from '../atoms/blogAtoms'


function Home() {
  const [blogs] = useAtom(blogAtom)
  return (
    <div>
      
      <BlogForm/>
        <footer>
      coded by Tesnim Abdella.
    </footer>
     
    </div>
    
  )
}

export default Home
