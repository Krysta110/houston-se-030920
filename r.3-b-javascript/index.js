let container = document.querySelector('.pengiungotchi-container')

fetch('http://localhost:3000/my-penguingotchi')
    .then(function(response){
        return response.json()
    })
    .then(function(p){

        p.hunger += 1
        p.happiness -= 1

        fetch('http://localhost:3000/my-penguingotchi', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hunger: p.hunger ,
                happiness: p.happiness 
            }),
        })

        let pImage = document.createElement('img')
        pImage.src = p.image
        container.append(pImage)

        let pHungry = document.createElement('p')
        pHungry.append( `Hungry Meter: ${p.hunger}` )
        container.append(pHungry)

        let pHappiness = document.createElement('p')
        pHappiness.append( `Happiness Meter: ${p.happiness}` )
        container.append(pHappiness)



        let feedBtn = document.createElement('button')
        container.append(feedBtn)
        feedBtn.append(`Feed ${p.name}`)
        feedBtn.addEventListener('click', function(){
            // Decrease the hunger level
            p.hunger -= 1 

            // Updating the page
            pHungry.innerText = `Hungry Meter: ${p.hunger}`

            // Update the server
            fetch('http://localhost:3000/my-penguingotchi', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    hunger: p.hunger
                }),
            })
        })


        let playBtn = document.createElement('button')
        container.append(playBtn)
        playBtn.append(`Play with ${p.name}`)
        playBtn.addEventListener('click', function(){
            // Decrease the hunger level
            p.happiness += 1 

            // Updating the page
            pHappiness.innerText = `Happiness Meter: ${p.happiness}`

            // Update the server
            fetch('http://localhost:3000/my-penguingotchi', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    happiness: p.happiness
                })
            })
        })

        // List current friends on the page
        let friendList = document.createElement('ul')
        container.append(friendList)
        p.friends.forEach(function(friendName){
            let friendPTag = document.createElement('p')
            friendPTag.append(friendName)
            friendList.append(friendPTag)
        })

        // Create inputs to add a new friend
        let newFriendInput = document.createElement('input')
        container.append(newFriendInput)

        let addFriendButton = document.createElement('button')
        addFriendButton.append('+ Add Friend')
        container.append(addFriendButton)

        addFriendButton.addEventListener('click', function(e){
            let newFriendName = newFriendInput.value

            // Change the local data
            p.friends.push(newFriendName)

            // Put new friends on the page
            let friendPTag = document.createElement('p')
            friendPTag.append(newFriendName)
            friendList.append(friendPTag)

            // Update the server
            fetch('http://localhost:3000/my-penguingotchi', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    friends: p.friends
                })
            })
        })
    })