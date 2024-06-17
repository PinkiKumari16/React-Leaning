const input = require('readline-sync');
let n = +input.question('n: ');
let sum1 = input.question('arr: ').split(' ').reduce((pre,curr)=>pre+Number(curr), 0);
let c=0;
for(let i=1; i<n+1; i++){
    c+=i;
}
(sum1 === c)? console.log('YES') : console.log('NO')