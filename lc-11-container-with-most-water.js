var maxArea = function(height) {
    var maxArea = 0;
    var left = 0;
    var right = height.length - 1;
    while(left < right) {
        const minHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = minHeight * width;
        maxArea = Math.max(maxArea, area);
        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea;
};