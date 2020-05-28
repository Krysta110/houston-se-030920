const cors = require('cors')
const bodyParser = require('body-parser')

const knexfile = require('./knexfile')
const knex = require('knex')(knexfile.development)

const express= require('express')
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(express.static('frontend'))

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
    io.emit('new-review', newReview)
    response.json(newReview)
})

http.listen(3000)
console.log('Listenting on 3000')