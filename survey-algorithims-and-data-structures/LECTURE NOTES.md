# Algorithms & Data Structures

### Learning Goals

* Use recursion to solve problems with nested data structures of indeterminate depth
* Calculate the time complexity for a function using Big O notation
* Use Data Structures strategically to reduce time complexity


### Activation

* Soundbyte from first lecture
* Data structures are still just containers for other variables
* Nearly all algorithmic problems fall into two categories:
  * Solving a problem with indeterminately nested data structures
  * Optimizing data structures to lower the time complexity of an algorithim 


### Learning Goal 1: Use recursion to solve problems with indeterminately nested data structures

* Activation: Balls & Bags
  * Explanation: Flattening an array
* This was an interview question for a former student
* Identify a base case, assume the function already works
* Exercise: Sticky Note Recursive Evaluation 
* Coding the flattening of an array


### Learning Goal 2: Calculate the time complexity for a function using Big O notation

* Define algorithim
* Calculating time complexity: count the nested loops
* Think Pair Share: What is the time complexity of this algorithim? How could you refactor it?

```javascript
function teaWithLongestSteepTime(teaBags){
    return teaBags.find( teaBag => (
    	!teaBags.find( anotherTeaBag => teaBag.steepTime < anotherTeaBag.steepTime )
    ))
}
```

### Learning Goal 3: Use Data Structures strategically to reduce time complexity

* Activation: This ux sucks
* Overview of datastructures:
  * Array
  * List
  * Stack
  * Queue
  * LinkedList
  * Hash Map
* Time Complexity Data Structure Chart
* Preprocessing with a hash map



```// Different amounts of time that different processes will take

```

// based on inputs

// Time it takes your code to run when processing really big datasets

// Big O Notation: Count the loops

// {

//     points: 0

// }

// O(1)

// O(n)

// O(n^2)

// Sorting: O(n * log(O(n)) )

// Option 1: Sort by steep time

//  return the first tea bag

// Option 2: Start with an empty value

//   Replace that value with each "largest" tea bag you encounter

function teaWithLongestSteepTime(teaBags){

​    let longestSteepTime = teaBags[0]

​    teaBags.forEach( teaBag => {

​        if(teaBag.steepTime > longestSteepTime.steepTime){

​            longestSteepTime = teaBag

​        }

​    })

​    return longestSteepTime

}

// 1) Solving a problem where the time complexity is indeterminate

//  * recursion

// recursion "do the same thing again"

// Simple example

let numbers = [ 1, 2, 3 ]

function total(numbers){

​    let [ firstNumber, ...restOfTheNumbers ] = numbers

​    

​    // let firstNumber  = numbers[0]

​    // let restOfNumbers = numbers[1 - numbers.length]

​    if(numbers.length > 1 ){

​        return firstNumber + total(restOfTheNumbers)

​    }  else {

​        return firstNumber

​    } 

}

total(numbers)

let bag = [

​    4,

​    3, 

​    1,

​    [

​        1,

​        3,

​        [

​            1,

​            6

​        ]

​    ],

​    [

​        5, 

​        9,

​        [

​            4

​        ]

​    ]

]

function flattenArray(array){ // [ 4, 3, 1, [], [] ]

​    let flatArray = [] // 4, 3, 1, 3, 1, 6

​    array.forEach( thing => { // [ 1, 3, [] ]

​        if(thing instanceof Array){

​            // Its a bag

​            let result = flattenArray(thing) // [ 1, 3, 1, 6]

​            flatArray = [ ...flatArray, ...result] 

​        } else {

​            // Its a ball

​            flatArray.push(thing)

​        }

​    })

​    return flatArray

}

// 2) Use a data structure to lower the time complexity of an algorithim