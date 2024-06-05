const input = require('readline-sync');
let t = +(input.question('t: '));
while(t){
    let r = input.question('r: ');
    let [x1,y1] = input.question('x1,y1').split(' ').map(Number);
    let [x2,y2] = input.question('x1,y1').split(' ').map(Number);
    let [x3,y3] = input.question('x1,y1').split(' ').map(Number);
    let d12 = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
    let d13 = Math.sqrt((x1-x3)**2 + (y1-y3)**2);
    let d23 = Math.sqrt((x2-x3)**2 + (y2-y3)**2);
    let d = [d12,d13,d23];
    let c=0;
    for(let i of d){
        if (i>r){
            c++;
        }
    }
    if(c>=2){
        console.log('no')
    }
    else{
        console.log('yes')
    }
    t--;
}