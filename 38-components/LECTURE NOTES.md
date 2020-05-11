# Components and Props

### Learning Goals

* Identify the Visual Components of a UI

* Understand the difference between defining and rendering a component

* Use props to configure a child component


### Activation

* JS to React





### Component Hierarchy

* App
  * Title
  * DragonCardContainer
    * DragonCard []



* Parent
* Child
* ( Only valuable in context )



























### Learning Goal 1: Identify the Visual Components of a UI

##### Demonstrate

* Breaking down a site into a visual hierarchy
  * Do parts of our UI repeat?
  * Do parts of our UI share common data?

##### Questions

##### Guide 

* Breaking down a mock of React Dragons

##### Check for Understanding

* Think-Pair-Share: 
  * Go to youtube.com
  * List out all of the components you can identify in a hierarchy

##### Cue

* If we can break our UI into these individual elements, we can use React Components to represent each of the elements we identify



### Learning Goal 2: Explain the difference between defining and rendering a component

##### Demonstrate

* Defining a component  (DragonList , text-align: center)
* Rendering a component
* This is similar to the difference between defining and instantiating an object!
* What `render` does
  * Rules of JSX
    * We interpolate variables with `{}`
    * Using map to iterate
    * Using ternarys to conditionally render

##### Questions

##### Guide 

- Defining a component to represent the first Dragon in our mock

##### Check for Understanding

* Kahoot [1-3]

##### Cue

* Now we've looked at the difference between defining and rendering a component, but it really isn't all that valuable to us if our components will be static. We need a way to configue them





### Learning Goal 3: Use props to configure a child component

##### Demonstrate

* That props is a **property** of our components
* That props is an **object**
* Using props to configure our DragonCard component
* Passing props from DragonList to each of our DragonCards
* This is the same as passing variables into the constructor when instantiating an object

##### Questions

##### Guide 

* Driver/Navigator: How could I do this if I were iterating over an array?

##### Check for Understanding

* Kahoot [4-6]

##### Cue

* Now we've seen how we can use props to configure a child component, but we definitely have some not dry code going on in our child component now



### Learning Goal 4: Use the spread operator to pass props to a child component 

##### Demonstrate

* Passing a whole object as props keeps us from being dry on both sides
* The spread operator can be useful;
  * The three dots are both the spread and the rest operator
  * They do related things

##### Questions

##### Guide 

* Driver/Navigator: How would I refactor this other component using the rest operator?

##### Check for Understanding

* Kahoot [7-9]

##### Cue

* Now we've used the spread operator to tighten up our code a little bit, but you might be wondering, what is the point? We can't change the data...



### Conclusion 

* Do you remember what we decided we were going to call of the **variable** data in our application?
  We were going to call it **state**. State is a literal concept in React, and we will learn how to leverage it so that our data can change in response to user interactions





```
export const dragons = [
    {
        "id": 1,
        "name": "Toothless",
        "description": "A Night Fury",
        "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
        "atWar": false
    },
    {
        "id": 2,
        "name": "Smaug",
        "description": "He is Fire, He is Death",
        "image":"http://media.comicbook.com/uploads1/2015/08/cumbersmaug-147620.jpg",
        "atWar": false
    },
    {
        "id": 3,
        "name": "Bozar",
        "description": "An uninteresting dragon",
        "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
        "atWar": false
    },
    {
        "id": 4,
        "name": "Tomar",
        "description": "An interesting dragon",
        "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
        "atWar": true
    }
]
```

