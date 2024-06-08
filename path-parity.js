const input = require('readline-sync');
let t = +input.question('t: ');
while(t){
    let [n,k] = input.question('n,k : ').split(' ').map(Number);
    (n%2===1 && k===0)? console.log('No') : console.log('Yes')
    t--;
}