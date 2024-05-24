let input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let [n,v1,v2] = input.question('n,v1,v2: ').split(' ').map(Number);
    let e_time = (n*2)/v2;
    let s_time = (Math.sqrt(2)*n)/v1;
    e_time < s_time ? console.log('Elevator') : console.log('Stairs');
    t--;
}