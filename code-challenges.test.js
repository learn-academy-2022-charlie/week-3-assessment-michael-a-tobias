// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fibSeq", () => {
    // My test is for a function called `fibSeq`.
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
        // These variables will be used within the scope of our test function.
        const fibLength1 = 6
            // Expected output: [1, 1, 2, 3, 5, 8]
        const fibLength2 = 10
            // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
        // These expect statements show that if we were take the above variables as an argument for our function, we are would expect these outputs.
      expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// RED:
  // ReferenceError: fibSeq is not defined
  // Test failed successfully.

// b) Create the function that makes the test pass.

// I will create a function called `fibSeq`
  // It will take a number `(n > 2)` and return an array with the same number of elements as `n`, but with the numbers of the Fibonacci sequence.
    // fibSeq.length === n

const fibSeq = (n) => {
    if(n <= 1) {
      return n;
    }  
    const result = [0, 1]
        // `result` will be an array of the Fibonacci results. The first two results are given as 0 and 1, otherwise the formula below will not work.    
    for (let i = 2; i <= n; i++) {
        // we start at an index of 2 because the first two results are known at 0 and 1.
      result[i] = result[i - 2] + result[i - 1]
        // the number at index i = the sum of the previous two numbers of the given index
    }
    result.shift()
        // the expected array does not include 0.
        // using the keyword .shift() removes the first element in the array, in this case, 0.
    return result
  }

// GREEN:
  // PASS.

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("sortOdd", () => {
    // My test is for a function called `sortOdd`.
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
        // These variables will be used within the scope of our test function.
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
        // Expected output: [-823, 7, 23]
    // These expect statements show that if we were take the above variables as an argument for our function, we are would expect these outputs.
    expect(sortOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(sortOdd(fullArr2)).toEqual([-823, 7, 23])
    })
  })

// RED:
  // ReferenceError: sortOdd is not defined
  // Test failed successfully. 

// b) Create the function that makes the test pass.

const sortOdd = (array) => {
    let sortNum = []
        // sortNum will hold an array of the results of our for loop
    for(let i=0; i<array.length; i++){
        // this will iterate over every element in an array
        if (typeof (array[i]) === "number" && 
            // if the element in an array is a number AND...
            array[i] % 2 !== 0){
                // ... if that number is odd...
            sortNum.push(array[i])
                // ... push the result into sortNum.
        }
    }
    return sortNum.sort(function(a, b){return a - b})
        // sort the numbers from least to greatest and return the result
        // I wish I understood `(function(a, b){return a - b})`, but every example I've seen act like it's the simplest thing in the world to understand and they don't go into it.
}

// GREEN:
    // PASS.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("fakeonacci", () => {
    // My test is for a function called `fakeonacci`.
    it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
        // These variables will be used within the scope of our test function.
        const numbersToAdd1 = [2, 4, 45, 9]
            // Expected output: [2, 6, 51, 60]
        const numbersToAdd2 = [0, 7, -8, 12]
            // Expected output: [0, 7, -1, 11]
        const numbersToAdd3 = []
            // Expected output: []
    // These expect statements show that if we were take the above variables as an argument for our function, we are would expect these outputs.
    expect(fakeonacci(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(fakeonacci(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(fakeonacci(numbersToAdd3)).toEqual([])
    })
  })

// RED:
  // ReferenceError: fakeonacci is not defined
  // Test failed successfully.

// b) Create the function that makes the test pass.

// fakeonacci will take an array and return an array of the accumulating sum. What does that mean?
  // value[0] + value[1] = result. I can probably use a for loop and push the results into an array.

const fakeonacci = (array) => {
    let results = [array[0]]
        // `results` will be an array carrying the results of the for loop. The first element will be the first element of the argument's array.
    for (let i = 1; i < array.length; i++) {
        // this for loop will iterate over an array skipping the first element
    let addedNum = array[i] + results[i - 1]
        // the value of an element in an array will be added to the value of a previous result
    results.push(addedNum)
        // the result of the above calculation will be pushed to `results`    
    }
    return results
}

// GREEN:
    // PASS.