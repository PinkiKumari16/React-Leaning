const input = require('readline-sync');
let t = Number(input.question('t: '));
for(let i=0; i<t; i++){
    let d = input.question('d:');
    let dic = {};
    for(let j of d){
        if(dic.hasOwnProperty(j)){
            dic[j]=0;
        }
        dic[j]++;
    }
    if(dic[0]===1 || dic[1]===1){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
}