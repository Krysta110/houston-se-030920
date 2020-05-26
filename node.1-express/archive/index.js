// Require "express"
const express = require('express')

// Use express to create our app
const app = express()

// Require and use CORS (A package which will allow our API to be accessed from different origins)
const cors = require('cors')
app.use(cors())

// Require and use body-parser (A package which will parse the body of HTTP requests)
const bodyParser = require('body-parser')
app.use(bodyParser())

// Create an empty reviews array
const reviews = []

// Listen for `fetch('/reviews')`
app.get('/reviews', (request, response) => {
    // Send a JSON version of our reviews array to the browser
    response.json(reviews)
})

// Listen for `fetch('/reviews', { method: "POST" })`
app.post('/reviews', (request, response) => {
    // Create an object to represent a new review using the
    //      body of our fetch request
    const newReview = {
        lat: request.body.lat,
        lng: request.body.lng,
        rating: request.body.rating
    }

    // Add the newReview to our array of reviews
    reviews.push(newReview)
    
    // Send a JSON version of our newReview to the browser
    response.json(newReview)
})

app.listen(3000)