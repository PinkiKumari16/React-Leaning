const input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let n=Number(input.question('n: '));
    let arr = input.question('arr:').split(' ').map(Number);
    let k = Number(input.question('K: '));
    let song = arr[k-1];
    arr.sort((a,b)=>a-b)
    console.log(arr.indexOf(song)+1)
    t--;
}