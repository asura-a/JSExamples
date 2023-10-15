function longestWord(str){
     let words = str.split(" ");
    let longword ='';
    words.forEach(word => {
        if(longword.length < word.length){
            longword = word 
        }
    });
    return longword;
}
console.log(longestWord("I am your beeeeeeest friend"));

function reverseArray(arr) {
    console.log(arr.reverse());
}
reverseArray(["i",1,2,3,4]);


function reverseString(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("I love you"));

function isPalindrome(string){
    let str = string.toLowerCase();
    let str1 = str.split(" ").join('')
    let str2 = str1.split('').reverse().join('')
    return str1 === str2
}
console.log(isPalindrome("MomoM"));
console.log(isPalindrome("I love you"));
console.log(isPalindrome("was it a car or a cat i saw"));

function isPalindromewithSpecialSymbol(str){
    let str1 = str.match(/[a-z0-9]+/ig).join('').toLowerCase()
    let str2 = str1.split('').reverse().join('')

    return str1 === str2
}
console.log(isPalindromewithSpecialSymbol("red -rum-, sir, -is-murder"));


function countletters(str) {
    let str1 = str.split("");
    let letters =[];
    let count = 1;
    for (let index = 0; index < str1.length; index++) {
        if (str1[index] === str1[index+1]) {
            count++;
        } else {
            let value =`${count}${str1[index]}`;
            letters =[...letters, value];
            count=1
        }
    }
    return letters;
}
console.log(countletters("aaabbboott tttt tttttt"));

function countLettersOfSequence(str) {
    let str1 = str.split(" ").join('').split("");
    let letters={}
    let len = new Set(str1)
    len.forEach(element => {
        letters[element]=0
    });

    console.log(len);
    console.log(letters);
    for (let i = 0; i < str1.length; i++) {
        let count =0;
      if (letters[str1[i]] ===0) {
      for (let j = i; j < str1.length; j++) {
    if (str1[i] === str1[j]) {
            count++;
            letters[str1[i]]=count;
        } 
        
       }
    }
    }
    return letters;
    
}
console.log(countLettersOfSequence("aab love you dear"));