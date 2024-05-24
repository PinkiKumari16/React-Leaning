let input = require('readline-sync');
let t = + input.question('t: ');
while (t){
    let [a,b,k] = input.question('a,b,k: ').split(' ').map(Number);
    let c =0;
    while(a*k<=b){
        c+=(b%k);
        b=Math.floor(b/k);
        c+=1;
    }
    if(b>a){
        c+=(b-a);
    }
    console.log(c);
    t--;
}