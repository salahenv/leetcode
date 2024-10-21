var reverseVowels = function(s) {
    s = s.split('');
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    while(leftPointer < rightPointer) {
        let isLeftVowel = vowels.includes(s[leftPointer]);
        let isRightVowel = vowels.includes(s[rightPointer]);
        if(!isLeftVowel) {
            leftPointer++;
        }
        if(!isRightVowel) {
            rightPointer--;
        }
        if(
            isLeftVowel && 
            isRightVowel
        ) {
            let temp = s[leftPointer];
            s[leftPointer] = s[rightPointer];
            s[rightPointer] = temp;
            rightPointer--;
            leftPointer++;
        }
        console.log(s);
    }
    return s.join('');
};

console.log(reverseVowels('IceCreAm'));