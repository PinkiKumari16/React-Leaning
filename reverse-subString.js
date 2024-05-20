const input = require('readline-sync');
const str = input.question('str: ');
let start = Number(input.question('start: '));
let end = Number(input.question('end: '));
let sub = str.slice(start,end+1);
let revSub =sub.split('').reverse().join('');
let str2 = str.replace(sub,revSub);
console.log(str2);
