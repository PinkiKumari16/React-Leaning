let input = require('readline-sync');
let n = Number(input.question('n: '));
while(n){
    let [x,y] = input.question('x,y: ').split(' ').map(Number);
    if(x<1000){
        x+=1000;
        y--;
    }
    console.log(x*(2**y))
    n--;
}