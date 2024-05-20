let input = require('readline-sync');
let t = parseInt(input.question('t: '));
while(t){
    let n = parseInt(input.question('n: '));
    if(n<9){
        console.log(Math.floor(n*(n+1)/2));
    }
    else{
        let mod = (n%9);
        console.log(Math.floor(n/9)*45 + (Math.floor(mod*(mod+1)/2)));
    }
    t--;
}