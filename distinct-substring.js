const input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let [n,k] = input.question('n,k: ').split(' ').map(Number);
    let sum1 = 0;
    for(let i=1; i<=k; i++){
        sum1+=i;
    }
    sum1+=(k-1);
    if(sum1<=n){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
    t--;
}