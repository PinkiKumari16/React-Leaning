const input = require('readline-sync');
let t = + input.question('t: ');
let attackCount = (n,x,y) => {
    let left = y-1;
    let right = n-y;
    let up = x-1;
    let down = n-x;

    let right_up = Math.min(right, up);
    let left_up = Math.min(left, up);
    let right_down = Math.min(right, down);
    let left_down = Math.min(left, down);
    return(left+right+up+down+right_down+right_up+left_down+left_up);
}
while(t){
    let[n,x,y] = input.question('n,x,y: ').split(' ').map(Number);
    console.log(attackCount(n,x,y))
    t--;
    console.log('pinki');
}