let input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let [x,h] = input.question('x,h: ').split(' ').map(Number);
    let counter = 0;
    while(h>0){
        if(counter<=5){
            h=(h-Math.floor(x/2));
            counter++;
        }
        else{
            h=h-x;
            counter++;
        }
    }
    console.log(counter);
    t--;
}