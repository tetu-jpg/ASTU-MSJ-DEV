import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCard from './BlogCard'; 
import { useAtom } from 'jotai'
import { blogAtom } from '../atoms/blogAtoms'

function BlogForm() {
    const [blogs, setBlogs] = useAtom(blogAtom)
    const [records,setRecords]=useState([]);
    useEffect(()=> {
        if (blogs.length === 0){
        axios.get('https://dummyjson.com/posts?limit=10')
        .then(res => {
            setBlogs(res.data.posts)
            setRecords(res.data.posts)
    })
        .catch(err => console.log(err))
}
else{
    setRecords(blogs)
}

    },[])
    const getInputData = (event) => {
        const value = event.target.value.toLowerCase();

        setBlogs(
            records.filter(r =>
                r.title.toLowerCase().includes(value)
            )
        )
    }
  return (
    <div>
      <div className='posts'>
        <div className='search-container'>
            <input type="text"  placeholder='search' 
            onInput={getInputData} className='search-input'></input>
        </div>
        <div className='blog-icon'>
            <h3>Blogs</h3>
            <i className='fa fa-calculator'></i>
            <hr/>

        </div>
        
        <div className='posts-container'>
            {
                blogs.map((blog) =>(
                    <BlogCard  blog={blog} key={blog.id}/>

                ))
            }

        </div>
      </div>
    </div>
  )
}

export default BlogForm
