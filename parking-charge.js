const input = require('readline-sync');
let [x,y,h] = input.question('x,y,h: ').split(' ').map(Number);
if(h){
    console.log((h-1)*y+x);
}
else{
    console.log(0)
}