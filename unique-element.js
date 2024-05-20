const input = require('readline-sync');
const  arr = input.question('arr: ').split(' ').map(Number);
const s = new Set(arr);
console.log(s.size);


// const input = require('readline-sync');
// const  arr = input.question('arr: ').split(' ').map(Number);
// const uni = [];
// for(let i of arr){
//     if(! uni.includes(i)){
//         uni.push(i);
//     }
// }
// console.log(uni.length,uni);