// brute force it will time limit exceed for long input

var maxProfit = function(prices) {
    
};

// optimised

// Intuition

// Since you can buy and/or sell -> i per becho + kharido || becho ya kharido
// If price of day i is less than profit of day i+1 book profit 

var maxProfit = function(prices) {
    let profit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i] < prices[i+1]) {
            profit = profit + prices[i+1] - prices[i];
        }
    }
    return profit;
};


const prices = [7,6,4,3,1];
const max = maxProfit(prices);
console.log(max);