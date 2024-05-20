const input = require('readline-sync');
const str = input.question('str: ');
let max_c = 0;
let c = 1;
for(let i=0; i<str.length-1; i++){
    if(str[i] !== str[i+1]){
        c=1;
    }
    else{
        c++;
    }
    max_c = Math.max(c,max_c);
}
console.log(max_c);