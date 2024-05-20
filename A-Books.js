const input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let n = parseInt(input.question('n: '));
    const a = input.question('arr: ').split(' ').map(Number);
    let newArr=[];
    for(let i=0; i<n; i++){
        if(i==n-1){
            newArr.push(0);
        }
        else if(a[i]<a[i+1]){
            newArr.push(n-(i+1));
        }
        else{
            let subArr = a.slice(i);
            let c=0;
            for(let ele of subArr){
                if(a[i] === ele){
                    c++;
                }
            }
            newArr.push(subArr.length-c);
        }
    }
    console.log(newArr);
    t--;
}