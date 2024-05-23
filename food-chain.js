let input = require('readline-sync');
let t= + input.question('t: ');
while(t){
    let [e,k] = input.question('e,k: ').split(' ').map(Number);
    let c = 1;
    if(e<k){
        console.log(c)
    }
    else{
        while(e>0){
            e=Math.floor(e/k);
            c++;
        }
        console.log(c-1);
    }

    t--;
}