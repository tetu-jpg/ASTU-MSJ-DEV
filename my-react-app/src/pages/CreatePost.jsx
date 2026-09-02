import React, { useState } from 'react'
import {useAtom} from 'jotai'
import { blogAtom } from '../atoms/blogAtoms'
function CreatePost() {
  const [blogs, setBlogs] = useAtom(blogAtom)
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const handle = (e) => {
    e.preventDefault()
    const newPost={
      id: Date.now(),
      title:title,
      body:description
    }

    setBlogs([...blogs, newPost])
    setTitle("")
    setDescription("")
  };


  return (
    <div className='form-container'>
        <form onSubmit={handle}>
            <div className='form-title'>           
                 <label><h5>Title</h5></label>
            <input type='text' value={title}
            onChange={(e) =>setTitle(e.target.value)}
            placeholder='write title'></input></div>

            <div className='new-description'>
                <label><h5>Description</h5></label>
                <textarea 
                id="description"
                value={description}
                onChange={(e) =>setDescription(e.target.value)}
                rows="20"
                cols="50"
                ></textarea>
            </div>

            
            <input type='file' name='desc' placeholder='write description' className='file'></input><br></br>
            <button className='newblog-btn' type='submit'>Post</button>
        </form>
      
    </div>
  )
}

export default CreatePost
