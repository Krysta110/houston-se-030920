let container = document.querySelector('.pengiungotchi-container')

fetch('http://localhost:3000/my-penguingotchi')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (pet) {

        pet.hunger += 1
        pet.happiness -= 1

        fetch('http://localhost:3000/my-penguingotchi', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hunger: pet.hunger,
                happiness: pet.happiness
            })
        })

        let petName = document.createElement('p')
        petName.innerText = pet.name

        let image = document.createElement('img')
        image.src = pet.image

        let happiness = document.createElement('p')
        happiness.innerText = `Happiness: ${pet.happiness}`

        let hunger = document.createElement('p')
        hunger.innerText = `Hunger: ${pet.hunger}`

        let feedBtn = document.createElement('button')
        feedBtn.innerText = "Feed Them"
        feedBtn.addEventListener('click', function (e) {
            pet.hunger -= 1
            hunger.innerText = `Hunger: ${pet.hunger}`
            fetch('http://localhost:3000/my-penguingotchi', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    hunger: pet.hunger
                })
            })
        })

        let playBtn = document.createElement('button')
        playBtn.append('Play with Them')
        playBtn.addEventListener('click', function (e) {
            happiness.innerText = `Happiness: ${pet.happiness += 1}`
            fetch('http://localhost:3000/my-penguingotchi', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    happiness: pet.happiness
                })
            })
        })

        container.append(
            image,
            petName,
            happiness,
            hunger,
            feedBtn,
            playBtn
        )
    })