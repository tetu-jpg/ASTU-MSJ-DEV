import React from 'react'
import{ bookmarkAtom } from "../atoms/bookmarkAtoms"
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai'

function BlogCard({blog}) {
  const [bookmarks,setBookmarks] = useAtom(bookmarkAtom)
  const isBookmarked = bookmarks.some(
    (item) => item.id === blog.id  )
    const handlemark= () =>{
      let updated;
      if(isBookmarked){
        updated=
          bookmarks.filter(item =>item.id !==blog.id)
        
      }
      else{
        updated=[...bookmarks, blog]
      }
      setBookmarks(updated);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
    }
  return (
    
    <div className='blog'>
        
        <div className='blog-title'>
            <h2>{blog.title}</h2>
            <p className='blog-body'>{blog.body}</p>
            
            <Link to={`/read/${blog.id}`} className='readmore'>Read More...
            </Link>

            <button onClick={handlemark} className='fav-btn'>
              {isBookmarked ?  '⭐' : '☆'}
            </button>

        </div>

      
    </div>
    
  )
}

export default BlogCard;
