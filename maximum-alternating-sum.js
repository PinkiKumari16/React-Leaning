const input = require('readline-sync');
let t = Number(input.question('t: '));
for(let i=0; i<t; i++){
    n=Number(input.question('n: '));
    a = input.question('List: ').split(' ').map(Number);
    a.sort();
    let sum1 = a[n-1];
    a.pop();
    let ind = 1;
    let pos = 0;
    let neg = a.length-1;
    while(ind<n){
        if(ind%2===0){
            sum1+=a[neg];
            neg-=1;
        }
        else{
            sum1-=a[pos];
            pos+=1;
        }
        ind+=1;
    }
    console.log(sum1);
}

