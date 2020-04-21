# Intro to Events

##### FormativeEducation Deck: <https://formative.education/projects/30/edit>

## Learning Goals
- Use `addEventListener` to run code in response to an event
- Use `e.preventDefault` to prevent a form from making an HTTP Request
- Explain the difference between bubbling and capturing events


## Resources
- [Sample Video](<https://youtu.be/6g0kTS8Bltk>)


## Outline

### Activation

Review existing code

*Talk about how move is a being passed into setInterval*

As cool as it is to have a moving character, real users wouldn't open up a dev console to interact with our application. What should a user do to tell our character to go left? 



```
### Deliverables
* Move the character using the arrow keys
* Add a form so that we can change the speed of the character
```



### Learning Goal 1: Use `addEventListener` to run code in response to an event

#### Time Estimate: 25 min

#### Demonstrate:

* Using `.addEventListener` to listen for `keypress` events
* Using the `e` object to determine which key was pressed
* Responding to the event by moving the character
* Attaching event listeners by name and inline

#### Reinforce:

* *Driver/Navigator*: 

  Our character never stops moving! How can we get him to stop?



### Learning Goal 2: Use `e.preventDefault` to prevent a form from making an HTTP Request

#### Time Estimate: 20 min

#### Demonstrate:

* A preferences form with a submit button on the bottom of the page
* What happens when we submit?
* To handle this on the client side, because we don't have a backend:
  * Attach an event listener
  * Prevent the default behavior with `e.preventDefault()

  ```html
  <form class="preference-form">
      Fast Mode <input class="speed-input" name="speed" type="number" />
      <input type="submit" value="Apply"/>
  </form>
  ```



  ```javascript
  const form = document.querySelector('.preference-form')
  const speedInput = document.querySelector('.speed-input')
  form.addEventListener('submit', function(e){
      e.preventDefault()
      speed = e.target.value
  })
  ```

### Learning Goal 3: Explain the difference between bubbling and capturing events

#### Time Estimate: 15 min

#### Demonstrate:

* Rendering an h1 inside of a div
* How, when I click the h1, I am also clicking the **div** it's inside
* How there are two ways JavaScript could handle this, from the top of the tree down, or from the bottom  of the tree up
  * By default, it will go from the bottom up
* Attaching event listeners to both
  * Using the default "bubble" method
  * Using the "capture" method
* How each callback logs when the h1 is clicked
