const input = require('readline-sync');
let t = Number(input.question('t: '));
for(let i=1; i<=t; i++){
    let leg = Number(input.question('leg: '));
    if(leg%4===0){
        console.log(Math.floor(leg/4));
    }
    else{
        console.log(Math.floor(leg/4)+1);
    }
}