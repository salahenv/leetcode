// brute force solution - recursive

var canJump = function(nums) {
   
};


// optimised solution - greedy

// Intuition

// 1. maintain a maxJump which will indicate max index i can reach and initialize it to first value of array
// 2. iterate the list from second element to last
// 3. at any element if its index exceed the maxPoint return false because we cant go
// 3. update maxPoint can reach by comparing the maxPoint with new max i + nums[i]
// 4. at the end of loop if maxPoint is greater or equal to last index means we can reach last


var canJump = function(nums) {
    const len = nums.length;
    let maxPoint = 0;
    for(var i = 0; i < len; i++) {
        if(i > maxPoint) {
            return false;
        }
        maxPoint = Math.max(maxPoint, i + nums[i]);
    }
    if(maxPoint >= len - 1) {
        return true;
    }
    return false;
};

const nums = [3,2,1,0,4];
console.log(canJump(nums));