const input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let [p1, p2, k] = input.question('p1, p2, k: ').split(' ').map(Number);
    let rem = (p1+p2) % (k*2);
    let turn;
    if(rem<k){
        turn = 'CHEF';
    }
    else{
        turn = 'COOK'
    }
    console.log(turn);
    t--;
}