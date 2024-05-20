let input = require('readline-sync');
let t = Number(input.question('t: '));
for(let i=0;i<t;i++){
    let n=parseInt(input.question('N: '));
    let arr = input.question('arr:').split(" ");
    let drr = input.question('drr:').split(' ');
    let a = arr.map((ele)=>parseInt(ele));
    let d = drr.map((ele)=>Number(ele));
    let array = a.concat(d);
    let obj= new Object();
    for(let item of array){
        if(!(Object.hasOwn(obj,item))){
            obj[item]=0;
        }
        obj[item]+=1;
    }
    console.log(Math.max(...(Object.values(obj))));
    
}