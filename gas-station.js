// brute force it will time limit exceed for long input

var canCompleteCircuit = function(gas, cost) {
    let i = 0;
    let k = 0;
    let len = gas.length;
    while(i < len) {
        var j = i;
        let remainingGas = 0;
        let gasAtJ = remainingGas + gas[j];
        let costAtJ = cost[j];
        console.log("i", i);
        while(gasAtJ >= costAtJ) {
            remainingGas = gasAtJ - costAtJ;
            k = j + 1;
            j = k % len;
            gasAtJ = remainingGas + gas[j];
            costAtJ = cost[j];
            if(i === j) {
                return i;
            }
        }
        i++;
    }
    return -1;
};

// optimised

// Intuition
// 1. if totalGas >= totalCost it means there is path to complete the circuit; Now problem is where to start
// 2. we will store totalRemaining at each element if at any element totalRemaining < 0 (negative) means we can't move further so need to update start = i + 1
var canCompleteCircuit = function(gas, cost) {
    const len = gas.length;
    let start = 0;
    let totalGas = 0;
    let totalCost = 0;
    let remainingGas = 0;
    for(let i = 0; i < len; i++) {
        remainingGas = remainingGas + gas[i] - cost[i];
        totalGas = totalGas + gas[i];
        totalCost = totalCost + cost[i];
        if(remainingGas < 0) {
            remainingGas = 0;
            start = i + 1;
        }
    }
    if(totalGas > totalCost) {
        return start;
    }
    return -1;
};
const gas = [0,0,0,0,0];
const cost = [0,0,0,0,0];

const result = canCompleteCircuit(gas, cost);
console.log('result', result);