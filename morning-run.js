let input = require('readline-sync');
let [h,w] = input.question('h,w: ').split(' ').map(Number);
if(2*(h+w)>=1000){
    console.log('Yes');
}else{
    console.log('No');
}