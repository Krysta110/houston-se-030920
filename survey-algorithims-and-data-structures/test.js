

// Time Complexity: O(n^2)
function max(numbers){
    let highestNumber = 0
    numbers.forEach( number1 => {
        let thereIsAHigherNumber = false
        numbers.forEach( number2 => {
            if(number2 > number1) thereIsAHigherNumber = true
        })
        if(thereIsAHigherNumber === false){
            highestNumber = number1
        }
    })
    return highestNumber 
}


//  Time Complexity of O(n)
function sum(numbers){
    let total = 0
    numbers.forEach( number => {
        total += number  
    })
    return total 
}

// Time Complexity of O(1)
//  (constant time)
function firstNumber(numbers){
    return numbers[0]
}




// Array
//  - 

// Stack
//  - Last in, first out
//  - We can only add to the end (O(1))
//  - We can only remove from the end (O(1))

// Queue 
//  - First in, first out
//  - We can only add at the beginning (O(1))
//  - We can only remove from the end  (O(1))

// Hash
//  - 






// Recursive Method
//  - A function calling itself until it reaches a base case
// Base Case
//  - The simplist form of a problem
//  - The condition in which the function no longer needs to repeat (call it self)

// function sum(numbers){
//     if(numbers.length === 1){
//         // Base Case
//         return numbers[0]
//     } else {
//         // Non Base Case
//         return numbers[0] + sum(numbers.slice(1))
//     }
// }


// sum([ 1, 2, 3 ]) // 1 + 5 => 6
// sum([ 2, 3 ])    // 2 + 3 = 5
// sum([ 3 ])    // 3



// // 8 balls

// let bag = [
//     [ 1, 1], // bag-1
//     [ // bag-2
//         [ 1, 1], // bag-1
//         1, 1
//     ],
//     1,
//     1,
// ]


// // 1. Open the bag
// // 2. Count the balls
// // 3. Look in each smaller bag
// // 4. Repeat these steps for the smaller bag

// let numberOfBalls = function(bag){
//     let total = 0;
//     bag.forEach( x => {
//         if(Array.isArray(x)){
//             total += numberOfBalls(x)
//         } else {
//             total++
//         }
//     })
//     return total
// }

// // Reduce Example
// let numberOfBalls = bag => bag.reduce( (total, x) => (
//     Array.isArray(x) ? total + numberOfBalls(x) : total + 1
// ), 0)
