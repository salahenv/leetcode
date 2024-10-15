var productExceptSelf = function(nums) {
    const len = nums.length;
    let leftarr = new Array(len).fill(1);
    let rightarr = new Array(len).fill(1);
    let res = new Array(len).fill(1);
    let i = 0;
    let j = 0;
    while(i < len) {
        leftarr[i] = typeof leftarr[i - 1] === 'number' ? leftarr[i - 1] * nums[i] : nums[i];
        let j = len - i - 1;
        rightarr[j] = typeof rightarr[j + 1] === 'number' ? rightarr[j + 1] * nums[j] : nums[j];
        i++;
    }
    console.log(arr1);
    console.log(arr2);
    while(j < len) { 
        const leftProduct = typeof leftarr[j-1] === 'number' ? leftarr[j-1] : 1;
        const rightProduct = typeof rightarr[j+1] === 'number' ? rightarr[j+1] : 1;
        res[j] = leftProduct * rightProduct;
        j++;
     }
    
    return res;
};