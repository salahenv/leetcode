var romanToInt = function(s) {
    const symbol = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}; 
    const len = s.length;
    let i = 0;
    let num = 0;
    while(i < len) {
        let val = 0;
        if(symbol[s[i]] < symbol[s[i+1]]) {
            val = symbol[s[i+1]] - symbol[s[i]];
            i = i + 2;
        }
        else {
            val = symbol[s[i]];
            i = i+1;
        }
        num = num + val;
    }
    return num;
};