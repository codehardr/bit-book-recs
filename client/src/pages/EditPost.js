import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
  })
  const navigate = useNavigate()
  const handleForm = e => setPost({ ...post, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/edit/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
  }
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
  }, [])
  return (
    <div className="new-book">
      <h1>Edit Book</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={e => handleForm(e)}
            value={post.title}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            onChange={e => handleForm(e)}
            value={post.content}
          ></textarea>
        </div>
        <div>
          <label htmlFor="cover">Cover:</label>
          <input
            id="cover"
            type="text"
            name="image"
            onChange={e => handleForm(e)}
            value={post.image}
          />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  )
}

export default EditPost
