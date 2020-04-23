# Communication with the Server

##### FormativeEducation Deck: <https://formative.education/projects/32/edit>



> Open the backend and run `rails s` before lecture begins

> Open https://app.swaggerhub.com/apis-docs/Joshua-Miles/TheWebGame/1.0.0 to use as API Documentation when making fetch requests

### Activation

What do you use these web applications to **do**?



### Learning Goals

- Describe the uses of a backend in the context of web applications
- Use fetch to retrieve data from a server and display the results in the DOM
- Use fetch to send data to a server



### Learning Goal 1: Describe the uses of a backend in the context of web applications

#### Demonstrate:

- That once we reload the page, the character returns to his original position
  - That this is because we are hardcoding the characters position
- That we would *probably* not want to store this information on the client
  - We want to store and retrieve the information from the server




### Learning Goal 2: Use fetch to retrieve data from a server and display the results in the DOM

#### Demonstrate:

* Reading API Documentation 
* Using it to decide how to make Postman requests (10.185.7.123:3000)
* Making a simple get request in postman
* Making the same request with fetch in the browser
```
fetch('http://localhost:3000/characterData')
    .then(function(response){
        return response.json()
    })
    .then(function(characterData){
        character.style.left = `${characterData.x}px`
        character.style.bottom = `${characterData.y}px`
        document.body.append(character)
    })
```




> Break



### Learning Goal 3: Use fetch to send data to a server

#### Demonstrate:

* Reading API Documentation
* Using it to decide how to make Postman requests 
* Passing options to fetch so that it can make the same request

#### Reinforce:

* Who can guide me through making a fetch request to the log inpoint in our server?

#### Check for Understanding: 

> Open https://www.fuckyeahgtj.com/emoji-socket-fireworks/ for the duration of these FormativeEd Exercises
