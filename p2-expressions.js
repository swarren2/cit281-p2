/*
    CIT 281 Project 2
    Name: Sydnee Warren
    Refactor
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

// for (let i = 0; i < getRandomInteger(5, 26); i++) {
//     result += alphabet[getRandomInteger(1,alphabet.length-1)];
// }

//Function that returns single random lowercase letter

const getRandomLetter = function() {
    return alphabet[Math.floor(Math.random() * alphabet.length)]
};

for (let i = 0; i < 1; i++) {
    console.log(getRandomLetter());
};

//Function that returns the random length string

const getRandomString = function(minLength, maxLength) {
    //let length = getRandomInteger(minLength, maxLength);
    let result2 = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
            result2 += alphabet[getRandomInteger(1, alphabet.length-1)];
         }
        return result2

};

console.log(getRandomString(10, 20));


//Function that is passed a string and sorts said string in alphabetical order

const getSortedString = function(string) {return string.split('').sort().join('')}


//just testing to make sure it works
console.log(getSortedString('zyxwvutsrqponmlkjihgfedcba'))
