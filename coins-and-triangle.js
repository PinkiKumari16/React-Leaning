let input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let n = +input.question('n: ');
    let i = 1;
    let c=0;
    while(n>=i){
        c+=1;
        n-=i;
        i+=1
    }
    console.log(c);
    t--;
}