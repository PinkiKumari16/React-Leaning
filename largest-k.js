const input = require('readline-sync');

let t = Number(input.question('t: '));
while(t){
    let n = parseInt(input.question('n: '));
    let a = input.question('arr: ').split(' ').map(Number);
    let k=0;
    let m=n;
    while(k===0){
        if(a.includes(m)){
            k=m;
        }
        else{
            m-=1;
        }
    }
    console.log(k)
    t--;
}