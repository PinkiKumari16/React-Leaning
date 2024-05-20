const input = require('readline-sync');
let t = parseInt(input.question('t: '));
for(let i=0;i<t; i++){
    let n = Number(input.question('n: '));
    let s = input.question('s: ');
    let res = "";
    for(let i=0;i<n;i+=2){
        if(s.slice(i,i+2)==='00'){
            res=res+'A';
        } 
        else if(s.slice(i,i+2)==='01'){
            res=res+'T';
        }
        else if(s.slice(i,i+2)==='10'){
            res=res+'C';
        }
        else if(s.slice(i,i+2)==='11'){
            res=res+'G';
        }
    }
    console.log(res);
}