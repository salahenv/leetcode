var minSubArrayLen = function(target, nums) {
    var si = 0;
    var sum = 0;
    var minLength = nums.length + 1; // Initialize with an impossible high value

    for (var ei = 0; ei < nums.length; ei++) {
        sum += nums[ei];

        // While the sum is greater than or equal to the target, try to shrink the window
        while (sum >= target) {
            minLength = Math.min(minLength, ei - si + 1);
            sum -= nums[si];
            si += 1;
        }
    }

    // If no valid subarray is found, return 0
    return minLength === nums.length + 1 ? 0 : minLength;
};