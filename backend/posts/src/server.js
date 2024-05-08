const express = require('express')
const router = express.Router()
const httpStatus = require('htttp-status')

const validate = require('../../middleware/validator')
const recipeValidator = require('../../validator/recipe')
const recipeController = require('../../controller/recipe')


// Parse json request body
server.use((req,res,next) => {
    console.log(`Route called: {req.method}`)
    next()
})

// Enable cors
server.use(cors());
server.options('*', cors());

// The router that contains all posts routes
const postRouter = require('./router/v1/post')

// Init posts router on Express
server.use('/api/v1', postRouter)

server.listen(3000)
server.listen(PORT,()=>{console.log("server online at port "+PORT)})