Ticket.destroy_all
Airline.destroy_all


united = Airline.create({ name: "United" })
spirit = Airline.create({ name: "Spirit" })
southwest = Airline.create({ name: "Southwest" })


Ticket.create({
    airline_id: united.id,
    destination: 'New York',
    starting_point: 'Houston',
    seat_number: '1A',
    date: Date.new(2020, 05, 1),
    price: 10
})



Ticket.create({
    airline_id: spirit.id,
    destination: 'Newark',
    starting_point: 'Orlando',
    seat_number: '32A',
    date: Date.new(2020, 05, 2),
    price: 5
})


Ticket.create({
    airline_id: united.id,
    destination: 'Berlin',
    starting_point: 'Houston',
    seat_number: '32E',
    date: Date.new(2020, 05, 10),
    price: 17
})


Ticket.create({
    airline_id: southwest.id,
    destination: 'Mexico City',
    starting_point: 'Houston',
    seat_number: '16E',
    date: Date.new(2020, 05, 20),
    price: 30
})