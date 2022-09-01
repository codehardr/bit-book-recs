import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  const [msg, setMsg] = useState({
    message: '',
    status: '',
  })

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(resp => resp.json())
      .then(resp => {
        setPosts(resp)
      })
  }, [msg])

  const handleDelete = id => {
    if (isNaN(id)) return
    fetch('http://localhost:3000/delete/' + id, { method: 'DELETE' })
      .then(resp => resp.json())
      .then(resp => {
        setMsg({ message: resp.message, status: 'green' })
      })
      .catch(error => {
        console.log(error)
        setMsg({ message: 'Server error', status: 'red' })
      })
      .finally(() => setTimeout(() => setMsg({ message: '', status: '' }), 3000))
  }

  return (
    <div className="app-box">
      {msg.message && <div className={'msg msg-' + msg.status}>{msg.message}</div>}
      <div className="books">
        {posts &&
          posts.map(book => {
            return (
              <div key={book.id} className="book">
                <h2>{book.title}</h2>
                <div className="cover">
                  <img src={book.image} alt={book.title} />
                </div>
                {/* <p>{book.content}</p> */}
                <div className="btns">
                  <button className="btn btn-del" onClick={() => handleDelete(book.id)}>
                    Delete
                  </button>
                  <Link to={'/post/' + book.id} className="btn btn-more">
                    Read More
                  </Link>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default App
