const input = require('readline-sync');
let t = input.question('t: ');
while(t){
    const[n,m] = input.question('N,M: ').split(' ').map(Number);
    const crickets = input.question('crickets: ').split(' ').map(Number);
    const bowlers = input.question('Bowlers: ').split(' ').map(Number);
    if(n>=4 && m>=4 && n+m>=11){
        crickets.sort((a,b)=>(a-b));
        bowlers.sort((a,b)=>(a-b));
        let rest = crickets.slice(0,n-4).concat(bowlers.slice(0,m-4));
        rest.sort()
        let arr = crickets.slice(-4).concat(bowlers.slice(-4)).concat(rest.slice(-3));
        
        let allPlayer = arr.reduce((res,curr)=> res+curr);
        console.log((allPlayer));

    }
    else{
        console.log(-1);
    }
    t--;
}