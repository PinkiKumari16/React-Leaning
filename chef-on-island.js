const input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let [x,y,xr,yr,d] = input.question('x,y,xr,yr,d: ').split(' ').map(Number);
    let need_food = xr*d;
    let need_water = yr*d;
    if(need_food<=x && need_water<=y){
        console.log('Yes')
    }
    else{
        console.log('No')
    }
    t--;
}