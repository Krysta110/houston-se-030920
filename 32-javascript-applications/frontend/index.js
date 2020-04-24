
let airlineUl = document.createElement('ul')
document.body.append(airlineUl)

fetch('http://localhost:3000/airlines')
    .then(function(response){
        return response.json()
    })
    .then(function(airlines){
        // airlines.each do | airline |
        // end
        airlines.forEach(function(airline){
            let airlineLi = document.createElement('li')
            let chooseAirline = document.createElement('button')
            chooseAirline.append('Details')
            chooseAirline.addEventListener('click', function(){
                airlineUl.remove()
                
                let airlineH1 = document.createElement('h1')
                airlineH1.append(airline.name)
                
                let ticketUl = document.createElement('ul')
                
                let newTicketForm = document.createElement('form')

                let startingPointInput = document.createElement('input')
                let destinationInput = document.createElement('input')
                let priceInput = document.createElement('input')
                priceInput.type = "number"
                let submitButton = document.createElement('button')

                submitButton.append('Submit')

                newTicketForm.append( 
                    'Starting Point: ', startingPointInput, 
                    'Destination: ', destinationInput, 
                    'Price:', priceInput,
                    submitButton
                )
                
                document.body.append(airlineH1, ticketUl, newTicketForm)

                newTicketForm.addEventListener('submit', function(e){
                    e.preventDefault()
                    let ticketLi = document.createElement('li')
                    ticketLi.append( 
                        `(${priceInput.value})  ${startingPointInput.value}-${destinationInput.value}`
                    )
                    ticketUl.append(ticketLi)

                    fetch('http://localhost:3000/tickets', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            airline_id: airline.id,
                            destination: destinationInput.value,
                            starting_point: startingPointInput.value,
                            price: priceInput.value
                        })
                    })
                    
                    priceInput.value = ''
                    startingPointInput.value = ''
                    destinationInput.value = ''
    
                })
                
                fetch(`http://localhost:3000/airline_tickets/${airline.id}`)
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(tickets){
                        tickets.forEach(function(ticket){
                            let ticketLi = document.createElement('li')
                            ticketLi.append( 
                                `(${ticket.price})  ${ticket.starting_point}-${ticket.destination}`
                            )
                            ticketUl.append(ticketLi)
                        })
                    })
            })
            airlineLi.append( airline.name, chooseAirline )
            airlineUl.append(airlineLi)
        })
    })