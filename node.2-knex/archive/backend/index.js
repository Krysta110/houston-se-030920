// const knex = require('knex')({
//     client: 'sqlite3',
//     connection: {
//       filename: "./mydb.sqlite"
//     }
//   });

const knex = require('knex')(require('./knexfile.js').development)
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser())

app.get('/reviews', async (request, response) => {
    let reviews = await (
        knex('reviews').select()
    )
    response.json(reviews)
})

app.post('/reviews', async (request, response) => {
    const newReview = {
        lat: request.body.lat,
        lng: request.body.lng,
        rating: request.body.rating
    }

    await knex('reviews').insert(newReview)
    
    response.json(newReview)
})

app.listen(3000)