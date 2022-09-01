import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Header from './components/Header'
import NewPost from './pages/NewPost'
import NotFound from './pages/NotFound'
import EditPost from './pages/EditPost'
import SinglePost from './pages/SinglePost'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
