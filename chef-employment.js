const input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let [n,k] = input.question('n,k: ').split(' ').map(Number);
    let a = input.question('arr: ').split(' ').map(Number);
    a.sort((a,b)=>a-b)
    console.log(a[Math.floor((n+k)/2)]);
    t--;
}


