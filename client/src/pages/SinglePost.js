import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SinglePost = () => {
  const { id } = useParams()
  const [post, setPost] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3000/' + id)
      .then(resp => resp.json())
      .then(resp => {
        if (!resp) return navigate('/')
        setPost(resp)
      })
      .catch(error => {
        console.log(error)
        navigate('/')
      })
  })
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
