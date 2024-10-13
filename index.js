var canCompleteCircuit = function(gas, cost) {
    let len = gas.length;
    let i = 0;
    let start = -1;
    let availableGas = 0, costOfReachingNext = 0;
    let next = 0;
      
    while(i < len) {
        start = i;
        next = i + 1;

        availableGas = gas[start];
        console.log("start", start);
        console.log("availableGas", availableGas);

        costOfReachingNext = cost[start];
        console.log("costOfReachingNext", costOfReachingNext);

        // while(availableGas >= costOfReachingNext) {
        //     next = next + 1;
        //     if(start === next) {
        //         console.log("circuit done");
        //         return start;
        //     }
        //     console.log("next", next);

        //     availableGas = availableGas - costOfReachingNext + gas[next];
        //     console.log("availableGas", availableGas);

        //     costOfReachingNext = cost[next];
        //     console.log("costOfReachingNext", costOfReachingNext);

        //     next = next + 1;
        // }
        console.log("cant start", start);
    }
    return -1;

    
  };
  // start 0
  //  next 1 
  //     g 5 2
  //     c 4 4

 
  const gas = [5,1,2,3,4];
  const cost = [4,4,1,5,1];
  canCompleteCircuit(gas, cost);