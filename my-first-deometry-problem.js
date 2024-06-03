let input = require('readline-sync');
let _ = + input.question('test cases: ');
while(_){
    let s=input.question('string: ');
    let left = +s[0], right =  Number(s[1]), up = +s[2], down =+s[3];
    let x = left*10 + right*10 +1;
    let y = up*10 + down*10 + 1;
    console.log(x*y);
    _--;
}