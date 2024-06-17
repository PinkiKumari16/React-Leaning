const input = require('readline-sync');
let t = + input.question('t: ');

while(t){
    let n = +input.question('n: ');
    let a = input.question('a: ').split(' ').map(Number);
    let odd_c = 0;
    for(let i of a){
        if(i%2 !== 0){
            odd_c++;
        }
    }
    if(n===odd_c){
        console.log('YES');
    }
    else{
        console.log('NO');
    }
    t--;
}