var longestCommonPrefix = function(strs) {
    var firstStr = strs[0];
    var resultStr = "";
    for(var i = 0; i < firstStr.length; i++) {
        var charAtI = firstStr[i];
        isMatched = true;
        for(var j = 1; j < strs.length; j++) {
            if(strs[j][i] != charAtI) {
               isMatched = false;
               break;
            }
        }
        if(isMatched) {
            resultStr = resultStr + charAtI;
        }
        if(!isMatched) {
            break; 
        }
    }
    return resultStr;
};