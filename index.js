require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')

const url = process.env.ATLAS_URL

mongoose.set('strictQuery', false)
mongoose.connect(url)

const movieSchema =  new mongoose.Schema({},{strict:false})
const Movie = mongoose.model('Movie',movieSchema,'movies')

const commentSchema =  new mongoose.Schema({},{strict:false})
const Comment = mongoose.model('Comment',commentSchema,'comments')


app.get('/', (req,res)=>{
    res.send('<h1>Hello world!</h1>')
})
app.get('/api/movies', (req,res)=>{
    Movie.find({}).limit(10).then((movies)=>{
        res.json(movies)
    })
})
app.get('/api/comments', (req,res)=>{
    Comment.find({}).limit(10).then((comments)=>{
        res.json(comments)
    })
})


const PORT = 3001
app.listen(PORT, ()=>{
    console.log(`Server running on url:\n http://localhost:${PORT}`)
})