let input = require('readline-sync');
let t = parseInt(input.question('t: '));
while(t){
    let n= + input.question('n: ');
    let a = input.question('list: ').split(' ').map(Number);
    const dic = new Object();
    let c = 0;
    for(let i of a){
        if(i!==0){
            if(Object.hasOwn(dic,i)){
                dic[i]++;
            }
            else{
                dic[i] = 1;
                c++;
            }
        }
    }
    if(c===0 || c===1){
        console.log('YES')
    }
    else{
        console.log('NO')
    }
    t--;
}