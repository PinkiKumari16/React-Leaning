let input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let arr = input.question('arr: ').split(' ').map(Number);
    let p = arr.pop();
    let totalSum = arr.reduce((res,curr,ind) => {
        if(ind === 1){
            res*=p;
        }
        return res+=(curr*p)
    });
    totalSum>120 ? console.log('No') : console.log('Yes');
    t--;
}