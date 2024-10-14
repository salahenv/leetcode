// brute force it will time limit exceed for long input

var maxProfit = function(prices) {
    
};

// optimised

// min first element ko maan lo
// iterate kro
// agar min se chota mila to min bna do
// nahi to profit calculate kro aur agar profit existing maxProfit se zyda hai to maxProfit ko update kro
// return kr do maxProfit

var maxProfit = function(prices) {
    const len = prices.length;
    let min = prices[0];
    let maxProfit = 0;
    for(var i = 1; i < len ; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }
    return maxProfit;
};

// Intuition

const prices = [7,6,4,3,1];
const max = maxProfit(prices);
console.log(max);