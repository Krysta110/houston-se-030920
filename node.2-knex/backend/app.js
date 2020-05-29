const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)

const app = express()

// fixes the cors error
app.use(cors())

// Parse the body of a request
app.use(bodyParser())

// index
app.get('/reviews', async function(request, response){
    const reviews = await knex.select('*').from('reviews')
    response.json(reviews)
})


// create
app.post('/reviews', async function(request, response){
    const newReview = {
        rating: request.body.rating,
        lat: request.body.lat,
        lng: request.body.lng,
    }
    await knex('reviews').insert(newReview)
    response.json(newReview)
})

app.listen(3000)
console.log('Listenting on 3000')