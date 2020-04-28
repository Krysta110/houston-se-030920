const PENGUINGOTCHI_URL = `http://localhost:3000/my-penguingotchi`

const container = document.querySelector('.pengiungotchi-container')

fetch(PENGUINGOTCHI_URL)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (pet) {

        pet.hunger += 1
        pet.happiness -= 1

        fetch(PENGUINGOTCHI_URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hunger: pet.hunger,
                happiness: pet.happiness
            })
        })

        renderPenguingotchi(pet)
    })