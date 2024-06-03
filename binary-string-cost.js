let input = require('readline-sync');
let _ = input.question('test cases: ');
while(_){
    let [n,x,y] = input.question('n,x,y: ').split(' ').map(Number);
    let s = input.question('string: ');
    let c_1 = s.includes('1');
    let c_0 = s.includes('0');
    if(c_0 && c_1){
        if(x<y){
            console.log(x*1);
        }
        else{
            console.log(y*1);
        }
    }
    else{
        console.log(0);
    }
    _--;
}