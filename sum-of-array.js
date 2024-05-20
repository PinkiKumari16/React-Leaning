const sumArray = (numArr) =>{
    let sum = numArr.reduce((res, element)=> res+element);
    return sum;
}

const isArrayEmpty = (numArr) =>{
    let sumArr = [];
    while(numArr.length){
        sumArr.push(sumArray(numArr));
        numArr.shift();
    }
    sumArr.push(0);
    return sumArr
}

const input = require('readline-sync');
const arr1 = input.question("enter the list: ").split(",");
let numArr = arr1.map((ele)=> +ele);
console.log(numArr);
console.log(isArrayEmpty(numArr));





