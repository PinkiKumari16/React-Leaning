let input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let n = parseInt(input.question('n: '));
    console.log((n+1)/2, Math.floor(((n+2)/3)));
    t--;
}