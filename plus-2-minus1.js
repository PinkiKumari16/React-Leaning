const input = require('readline-sync');
let t = +input.question('t: ');
while(t){
    let y = +input.question('y: ');
    let c =0;
    if(y===0){
        c=1;
    }
    else{
        c=(y*2)+(y-1)+1;
    }
    console.log(c);
    t--;
}