import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SinglePost = () => {
  const [post, setPost] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch('http://localhost:3000/' + id)
      .then(resp => resp.json())
      .then(resp => setPost(resp))
  }, [])
  return (
    <div className="single-book">
      <h1>{post.title}</h1>
      <div className="single-cover">
        <img src={post.image} alt={post.title} />
      </div>
      <p>{post.content}</p>
    </div>
  )
}

export default SinglePost
