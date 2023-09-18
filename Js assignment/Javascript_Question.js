/* Description of my work
    First step: analyze the problem, and given conditions
    we are given an array of integers, and a target, we are required to find if there are any two integers
    in the given array that their summation will give us the target and return their indices.
    * we have exactly one solution.

    and we were given an example and brief explanation for the question.

    I had an inquiry as the give example we were given a sorted array [2,7,11,15] and I was not sure 
    if the given array is always sorted or not.

    if the arrays are sorted I can use the two pointers technique to solve the question and have O(n) time as I will use only one loop.

    but because the question didn't mention anything about sorted arrays I assumed the given arrays will not be sorted.

    what solutions I had in my mined to solve this question?
    1- sort the given array then use two pointers technique.
    2- brute force method: just use two nested loops and check the elements of the array.

    I choose the brute force method as its simpler to apply and I still need to check whether the first solution is better than
    brute force method or not, but due to the lack of time available to me I choose the brute force, but I am sure the solution can 
    be improved later on.
*/

// define a function (I am learning react so I created an arrow function to practice them)
const checkValue = (arr, target) => {
    // edge case: if the given array has no elements or one integer then return false
    if (arr.length < 2) return false;
    // first loop
    for (let i = 0; i < arr.length; i++) {
        // second loop, always will start from next index the currant i point at
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) return [i, j];
        }
    }
    // if we checked all the elements and reached this part of the code this means there are no values can give
    // the summation of the target so return false
    return false;

}

let nums = [10, 7, 2, 11, 15, 2];
target = 12;
console.log(checkValue(nums, target));

