const input = require('readline-sync');
let t = +input.question('t: ');

let getCount = (p,i)=>{
    let count = 0;
    for (let c of p){
        if(c===i){
            count++;
        }
    }
    return count;
}

while(t){
    let n = +input.question('n: ');
    let p = input.question('list: ').split(' ').map(Number);
    let s = new Set(p);
    let flag = true;
    for(let i of s){
        let count = getCount(p,i);
        if(count !== i && count%i !== 0){
            flag = false;
            break
        }
    }
    if(flag){
        console.log('Yes');
    }
    else{
        console.log('No')
    }
    t--;
}