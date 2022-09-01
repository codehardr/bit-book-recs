import { useState } from 'react'

const NewPost = () => {
  const [postForm, setPostForm] = useState({
    title: '',
    content: '',
    image: '',
  })

  const handleForm = e => setPostForm({ ...postForm, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postForm),
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
  }

  return (
    <div className="new-book">
      <h1>Add New Book</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input id="title" type="text" name="title" onChange={e => handleForm(e)} />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" onChange={e => handleForm(e)}></textarea>
        </div>
        <div>
          <label htmlFor="cover">Cover:</label>
          <input id="cover" type="text" name="image" onChange={e => handleForm(e)} />
        </div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  )
}

export default NewPost
