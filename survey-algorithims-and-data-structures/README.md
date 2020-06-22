# Algorithms 

### Vocabulary
* Algorithms
    - A set of instructions to solve a problem
    - (kind of a function)
    - Used in the context of performance



* Time Complexity (O(n))
    - Depends on data structure
        - `for` loop is O(n)
        - Best case is O(1)
    - Bad case: O(n^2)
        - `for` loop inside of a `for` loop



### Approach #1 (O(N^2))

- Two `for` loops
  - Find a tea bag for which you cannot find a tea that takes longer to steep
  - This takes a hot minute

### Approach #2 (O(N(Log(N)))

- Sort 
  - Sort the array by steep time
  - Return the first or last accordingly

### Approach # 3 (O(N))

- One `for` loop
  - Assume the first one takes longest
  - And then test the assumption for every element in the array







