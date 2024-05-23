let input = require('readline-sync');
let [x,y] = input.question('x,y: ').split(' ').map(Number);
x-y>=18? console.log('RCB') : console.log('CSK');
