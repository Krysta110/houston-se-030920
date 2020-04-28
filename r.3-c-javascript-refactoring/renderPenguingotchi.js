const renderPenguingotchi = function (pet) {
    container.innerText = ''
    container.append(
        img({ src: pet.image }),
        p(pet.name),
        p(`Happiness: ${pet.happiness}`),
        p(`Hunger: ${pet.hunger}`),
        renderFeedButton(pet),
        renderPlayButton(pet)
    )
}


const renderPlayButton = function (pet) {
    return (
        button('Play with Them', {
            click: function (e) {
                pet.happiness += 1
                renderPenguingotchi(pet)
                savePet(pet)
            }
        })
    )
}

const renderFeedButton = function (pet) {
    return (
        button('Feed Them', {
            click: function (e) {
                pet.hunger -= 1
                renderPenguingotchi(pet)
                savePet(pet)
            }
        })
    )
}

const savePet = function(pet){
    fetch(PENGUINGOTCHI_URL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
}