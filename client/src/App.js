import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])
  const [msg, setMsg] = useState({
    message: '',
    status: '',
  })
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) return setMsg({ message: resp.message, status: 'red' })
        setPosts(resp)
      })
  }, [refresh])

  const handleDelete = id => {
    if (isNaN(id)) return
    fetch('http://localhost:3000/delete/' + id, { method: 'DELETE' })
      .then(resp => resp.json())
      .then(resp => {
        setMsg({ message: resp.message, status: 'green' })
        setRefresh(!refresh)
        window.scrollTo(0, 0)
      })
      .catch(error => {
        console.log(error)
        setMsg({ message: 'Server error', status: 'red' })
        window.scrollTo(0, 0)
      })
      .finally(() => setTimeout(() => setMsg({ message: '', status: '' }), 3000))
  }

  return (
    <div className="app-box">
      {msg.message && <div className={'msg msg-' + msg.status}>{msg.message}</div>}
      <div className="books">
        {posts.length > 0 &&
          posts.map(book => {
            return (
              <div key={book.id} className="book">
                <h2>{book.title}</h2>
                <Link to={'/post/' + book.id} className="cover">
                  <img src={book.image} alt={book.title} />
                </Link>
                <div className="btns">
                  <div className="btns-group-l">
                    <button className="btn btn-del" onClick={() => handleDelete(book.id)}>
                      Delete
                    </button>
                    <Link to={'/edit/' + book.id} className="btn btn-edit">
                      Edit
                    </Link>
                  </div>
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
