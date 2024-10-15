// Greedy Approach:
// At each position, we can jump a maximum number of steps defined by the value at that position (i.e., nums[i] tells you how far you can jump from index i). 
// The goal is to always try to make the fewest jumps, so we need to maximize our reach at every jump.

// Farthest Reachable Position:
// While iterating over the array, 
// the idea is to always keep track of the farthest point you can reach from the current position (farthest = Math.max(farthest, i + nums[i])). 
// You don't jump immediately but wait until you reach the maximum possible position for the current jump.

// When to Jump:
// You make a jump only when you can no longer move forward without exceeding the bounds of the current jump. 
// This happens when the current index reaches the end of the current jump range (currentEnd). 
// At this point, you increment the jump counter and set the next currentEnd to the farthest position you've calculated so far.

// Minimizing Jumps:
// By always jumping when you've reached the farthest possible position for the current jump, you ensure that you're making the fewest jumps. 
// You're essentially "saving" your jumps to make the most efficient use of each one.

var jump = function(nums) {
    let farthest = 0;
    let currentEnd = 0;
    let jump = 0;
    for(i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if(i === currentEnd) {
            currentEnd = farthest;
            jump++;
        }
    }
    return jump;
};

console.log(jump([2, 3, 1, 1, 4]));