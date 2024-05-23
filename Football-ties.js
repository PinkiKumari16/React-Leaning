let input = require('readline-sync');
let t = parseInt(input.question('t: '));
while(t){
    let [a,b] = input.question('a,b: ').split(' ').map(Number);
    console.log(a%3);
    t--;
}