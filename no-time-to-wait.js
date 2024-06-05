const input = require('readline-sync');
let [n,h,x] = input.question('n,h,x: ').split(' ').map(Number);
let list = input.question('list: ').split(' ').map(Number);
let flag = false;
for(let i of list){
    if(x+i >=h){
        flag=true;
        break
    }
}
if(flag){
    console.log('Yes')
}
else{
    console.log('No')
}
