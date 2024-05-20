// const getSum = (num)=>{
//     let sum1=0;
//     while(num){
//         sum1 += num%10;
//         num= Math.floor(num/10);
//     }
//     return sum1
// }

// const isSumOneDigit = (sum,num)=>{
//     while(sum>=10){
//         sum = getSum(num);
//         num=sum;
//     }
//     return sum

// }
// const input= require('readline-sync');
// const num= parseInt(input.question("enter the number: "),10);
// console.log(typeof(num),num);
// let sum=10;
// console.log("sum of digit: ",isSumOneDigit(sum,num));





const input = require('readline-sync');
let str = input.question("enter the strig: ");

while(str.length>1){
    let sum = 0;
    for(let i of str){
        sum += +i;
    }
    str = String(sum);
}
console.log(str);