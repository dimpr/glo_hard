let num = 266219;
let numArray = (num + "").split("");
let newNum = 1;

numArray.forEach(function (item, index, arr) {
    newNum *= item;
    console.log(newNum);
});

newNum **= 3;

console.log(newNum);
// console.log((newNum + "").slice(0, 1));