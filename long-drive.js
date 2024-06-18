const input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let [x,y] = input.question('x,y: ').split(' ').map(Number);
    let dis = x*10;
    let h = 0;
    while(x<y){
        x=((dis+((h+1)*100))/(10+(h+1)))
        h++;
    }
    console.log(h);
    t--;
}