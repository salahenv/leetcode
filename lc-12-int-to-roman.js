var intToRoman = function(num) {
    // Define Roman numerals for specific values
    const valueSymbolMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';
    
    // Loop through each symbol starting from the largest
    for (let i = 0; i < valueSymbolMap.length; i++) {
        // While the current value can fit into num, add the corresponding symbol
        while (num >= valueSymbolMap[i].value) {
            roman += valueSymbolMap[i].symbol;
            num -= valueSymbolMap[i].value;
        }
    }
    
    return roman;
};
