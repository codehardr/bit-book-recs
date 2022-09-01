import express from 'express'
import cors from 'cors'
import posts from './controller/posts.js'
import users from './controller/users.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())

app.use(posts)
app.use('/api/users/', users)

app.listen(3000)
