const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

// fixes the cors error
app.use(cors())

// Parse the body of a request
app.use(bodyParser())

const reviews = []

// index
app.get('/reviews', function(request, response){
    response.json(reviews)
})

// show
app.get('/reviews/:id', function(request, response){
    let review = reviews[request.params.id]
    reviews.push(review)
})

// create
app.post('/reviews', function(request, response){
    const newReview = {
        rating: request.body.rating,
        lat: request.body.lat,
        lng: request.body.lng,
    }
    reviews.push(newReview)
})

app.listen(3000)
console.log('Listenting on 3000')