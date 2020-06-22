const inputTag = document.querySelector('input')
const previousAirlineTag = document.querySelector('.previous-airline')
const airlineTag = document.querySelector('.airline')
const nextAirlineTag = document.querySelector('.next-airline')


let airlinesByCountry = {}
airlines.forEach( airline => {
    if(airlinesByCountry[airline.nameCountry] == undefined){
        airlinesByCountry[airline.nameCountry] = []
    }
    airlinesByCountry[airline.nameCountry].push(airline)
})

let airlinesByName = {}
airlines.forEach( airline => {
    airlinesByName[airline.nameAirline] = (airline)
})


inputTag.addEventListener('input', (e) => {
    const t0 = performance.now();
    //airlines.forEach( airline => {
    let airline = airlinesByName[e.target.value]
    if(airline){
        let sameCountry = airlinesByCountry[airline.nameCountry]
        render(airline, sameCountry.length)
    }
    //})
    const t1 = performance.now()
    console.log(`That took ${t1 - t0} milliseconds`)
    // let nextAirline = airlines.find( x => calculatePlaceFor(x) === calculatePlaceFor(airline) + 1)
    // let previousAirline = airlines.find( x => calculatePlaceFor(x) === calculatePlaceFor(airline) - 1)
    // render(airline, nextAirline, previousAirline)
})


const render = (airline, numberInCountry) => {
    if(airline) airlineTag.innerText = `${airline.nameAirline} (1 of ${numberInCountry} based in ${airline.nameCountry})`
    else airlineTag.innerText = '(None)'
}


// Data Structures

// Array (needs to be baked into the language)
//      - Fixed length
//      - un ordered

// List (basically array in JavaScript)
//      - Similar to array but:
//      - Variable length
//      - un ordered

// Stack & Queue (you could build these in JavaScript, less efficent than if they were baked in)
//      - Similar to lists:
//      - They have an order
//      - Elements must be "handled" in a certain order:
//          - Stack: LIFO
//          - Queue: FIFO

// LinkedList (you could build these in JavaScript, less efficent than if they were baked in)
//      - Similar to lists:
//      - Each element remembers its relationship to the next and previous elements
//      - very similar to the object relationships in mod 1
//      - relationships can be persisted

// HashMap
//      - key & value pairs
//      - goes by different names:
//          - objects in javascript
//          - hashes
//          - associative arrays in php
//          - dictionary objects || hash map in python
