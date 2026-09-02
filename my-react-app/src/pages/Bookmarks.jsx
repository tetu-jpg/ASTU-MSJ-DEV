import React from 'react'
import { bookmarkAtom } from '../atoms/bookmarkAtoms'
import BlogCard from '../components/BlogCard'
import { useAtom } from 'jotai'
function Bookmarks() {
  const [bookmarks ] =useAtom(bookmarkAtom)
  return (
    <div>
      <h2> Bookmarks</h2>
      {bookmarks.length ===0 ? (
        <p>No Bookmarks yet!</p>
      ):(
        bookmarks.map(blog=>(
          <BlogCard 
          key={blog.id}
          blog={blog}
          />
        ))
      )}
      
    </div>
  )
}

export default Bookmarks
