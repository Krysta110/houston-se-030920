async function launchApp() {
    let root = document.querySelector('.root')
    let map, reviewForm, ratingInput, addressInput;

    const response = await fetch('http://localhost:3000/reviews')
    const reviews = await response.json()

    root.append(
        div({ class: 'container' },
            div({ style: 'height: 100%;' },
                map = div({ class: 'map', style: 'height: 50vh' }),
                reviewForm = form(
                    div({ class: 'form-group' },
                        label('Address'),
                        addressInput = input({ type: 'text', class: 'form-control' })
                    ),
                    div({ class: 'form-group' },
                        label('Rating'),
                        ratingInput = input({ type: 'number', class: 'form-control' })
                    ),
                    input('Rate Restroom', { type: 'submit', class: 'btn btn-primary' })
                )
            )
        )
    )

    const googleMap = new google.maps.Map(map, {
        center: { lat: 29.7576198923993, lng: -95.36185792321558 },
        zoom: 15
    });

    reviews.forEach( review => {
        renderReview(googleMap, review.rating, review.lat, review.lng)
    })

    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const position = await geocodeAddress(addressInput.value)
        renderReview(googleMap, ratingInput.value, position.lat, position.lng)
        saveReview(ratingInput.value, position.lat, position.lng)
    })
}

function renderReview(googleMap, rating, lat, lng){
    googleMap.setCenter({
        lat: lat,
        lng: lng
    });
    new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: googleMap,
        title: rating,
        label: rating
    });
}

function saveReview(rating, lat, lng){
    fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lat: lat,
            lng: lng,
            rating: rating
        })
    })  
}

function geocodeAddress(address){
    return new Promise( resolve => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, (results, status)  => {
            if (status == 'OK') {
                let lat = results[0].geometry.location.lat()
                let lng = results[0].geometry.location.lng()
                resolve({
                    lat: lat,
                    lng: lng
                })
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    })
}