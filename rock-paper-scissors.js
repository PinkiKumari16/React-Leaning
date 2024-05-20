let input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let n = parseInt(input.question('n: '));
    let str = input.question('string: ');
    let win = 0;
    let i =0;
    while(i<=n-1){
        if(i == n-1){
            win+=1;
            i+=1;
        }
        else if(str[i] !== str[i+1]){
            win+=1
            i+=1;
        }
        else{
            win+=1;
            i+=2;
        }
    }
    console.log(win);
    t--;
}