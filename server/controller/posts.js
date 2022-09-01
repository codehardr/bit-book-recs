import express from 'express'
import db from '../database/connect.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await db.Posts.findAll()
    res.json(posts)
  } catch {
    // pirmas variantas grąžinti tik statusą
    // res.status(500).end()
    // antras variantas grąžinti tik statusą
    // res.sendStatus(500)

    res.status(500).json({ message: 'Server error' })
  }
})

router.get('/:id', async (req, res) => {
  const post = await db.Posts.findByPk(req.params.id)
  res.json(post)
})

router.post('/', async (req, res) => {
  // db.Posts.create()
  new db.Posts(req.body).save()
  res.json({ message: 'Entry created successfully' })
})

router.put('/edit/:id', async (req, res) => {
  const post = await db.Posts.findByPk(req.params.id)
  post.update(req.body)
  res.json({ message: 'Entry updated successfully' })
})

router.delete('/delete/:id', async (req, res) => {
  const post = await db.Posts.findByPk(req.params.id)
  post.destroy()
  res.json({ message: 'Entry removed successfully' })
})

export default router
