let input = require('readline-sync');
let t = + input.question('t: ');
let asumeAmount = (x,y,z) =>{
    if(x+y === z || x+z===y || x+z===y){
        return('Yes');
    }
    else{
        return('no')
    }
}

while(t){
    let [x,y,z] = input.question('x.y.z: ').split(' ').map(Number);
    console.log(asumeAmount(x,y,z))
    t--;
}