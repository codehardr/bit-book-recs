import express from 'express'
import cors from 'cors'
import posts from './controller/posts.js'

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(cors())

app.use(posts)

app.listen(3000)
