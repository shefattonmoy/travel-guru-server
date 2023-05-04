const express = require('express')
const app = express();
const port = process.env.PORT || 5000 ;
const cors = require('cors')
const destinations = require('./data/destinations.json')
const blogs = require('./data/blog.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.get('/destinations', (req, res)=>{
    res.send(destinations)
})

app.get('/destination/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id)
    const specificDestination = destinations.find(spDes => spDes.id == id) || {};
    res.send(specificDestination)
})

app.get('/blog', (req,res)=>{
    res.send(blogs)
})

app.listen(port, ()=>{
    console.log(`Travel Guru Server is Running on Port: ${port}`)
})