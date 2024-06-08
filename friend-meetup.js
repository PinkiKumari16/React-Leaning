const input = require('readline-sync');
let t = +input.question('t: ');
while(t){
    let [x1,x2] = input.question('x1, x2: ').split(' ').map(Number);
    (x1>=x2) ? console.log('Yes') : console.log('No')
    t--;
}