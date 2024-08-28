const input = require('readline-sync');
let t = Number(input.question('t: '));

while(t){
    let[n,a,b] = input.question('n,a,b: ').split(' ').map(Number);
    let s= input.question('s: ');
    let res=0;
    for(let i of s){
        if(i==='0'){
            res+=a
        }
        else{
            res+=b
        }
    }
    console.log(res)

    t--;
}