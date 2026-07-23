import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function BlogDetails() {
  const { id } = useParams();
  const [post,setPost] = useState(null)
  const [comments, setComments]=useState([])

  useEffect(()=> {
      axios.get(`https://dummyjson.com/posts/${id}`)
      .then(res => setPost(res.data))
      axios.get(`https://dummyjson.com/posts/${id}/comments`)
      .then(res => setComments(res.data.comments))
      .catch(err => console.log("Error fetching single post:",err))

  },[id]);
  if (!post) {
      return <div style={{ padding: '20px' }}>Loading blog details...</div>;
  }


  return (
    <div className='detail-post-container'>
      <div className='title-description'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

      </div>
      <div>
        ❤️ Likes: {post.reactions?.likes || 0}
      </div>
      <h2>
        Comments
      </h2>

      {
        comments.map(comment => (
          <div key={comment.id} className='comment'>
            <h4>{comment.user.username}</h4>
            <p>{comment.body}</p>
          </div>
        ))
      }

      
    </div>
  )
}

export default BlogDetails
