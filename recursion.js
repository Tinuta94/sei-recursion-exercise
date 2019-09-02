// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array) {
    // This function returns the largest number in a given array.
    let large = array[0];
    for (i = 1; i < array.length; i++) {
        if (large < array[i]) {
            large = array[i];
        }
    }
    return large;
}



function factorial(n) {
    // This function returns the factorial of a given number.
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }

}

function fibonacci(n){
//     // This function returns the Nth number in the fibonacci sequence.
//     // https://en.wikipedia.org/wiki/Fibonacci_number
//     // For this function, the first two fibonacci numbers are 1 and 1
if (n < 2){
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}


// function coinFlips(numTimes){
// let array = []
//  // Instead of a while loop, use a counting loop that will 
//   // have a definite end point
//   for(var i = 0; i < numTimes; i++){

//     // Get a random number from 0 to 1
//     var coin = Math.floor(Math.random() * 10);

//     // Test to see if it is even or odd by checking to see if
//     // it is divisible by 2 with no remainder.
//     var even = (coin % 2 === 0);

//     // Report the results
//     console.log("The coin was " + (even ? "heads " : " tails"));
//     array.length = numTimes[i]
//   }

//     return array
// }
//     // This function returns an array of all possible outcomes from flipping a coin N times.
//     // Input type: Integer
//     // For example, coinFlips(2) would return the following:
//     // ["HH", "HT", "TH", "TT"]
//     // H stands for Heads and T stands for tails
//     // Represent the two outcomes of each flip as "H" or "T"


function letterCombinations(current_string, actual_string, seen){
    var result = [];
    if (current_string.length === actual_string.length) {
        return [current_string];
    }
    actual_string.forEach(function(currentChar, index) {
        if (seen.indexOf(index) === -1) {
            result = [].concat.apply(result, combinations(current_string
                + currentChar, actual_string, seen.concat(index)));
        }
    });
    return result;
}
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]


module.exports = {
    findMax,
    factorial,
    fibonacci,
    // coinFlips,
    letterCombinations
}