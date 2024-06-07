const input = require('readline-sync');
let t = +input.question('t: ');
while(t){
    let n = +input.question('n: ');
    let list =[];
    for(let _ =0; _<n; _++){
        let items = input.question('items: ').split(' ').map(Number);
        list.push(items);
    }
    let sum1=0
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n; j++){
            sum1 = Math.max( sum1,((list[i][0] * list[j][1])+(list[i][1] * list[j][0])));
        }
    }
    console.log(sum1)
    t--;
}