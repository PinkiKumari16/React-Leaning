let input = require('readline-sync');
let t = +input.question('t: ');

let isPrime = (num) => {
    if(num === 1){
        return false;
    }
    else if(num===2 || num===3){
        return true;
    }
    else{
        for(let i=3; i<=(num**0.5) ; i+=2){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
}


while(t){
    let [s,e] = input.question('s,e: ').split(' ').map(Number);
    while(s<=e){
        if(s<=2){
            if(isPrime(s)){
                console.log(s);
            }
            s+=1;
        }
        else if(s%2 === 0){
            s+=1
            continue
        }
        else{
            if(isPrime(s)){
                console.log(s);
            }
            s+=2;
        }
    }
    console.log()
    t--;
}
