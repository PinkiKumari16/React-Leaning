let input = require('readline-sync');
let t = input.question('n: ');
while(t){
    let[n,x] = input.question('n,x: ').split(' ');
    let a = input.question('list: ').split(' ').map(Number);
    a.sort((x,y)=>y-x)
    let extra = 0;
    let c=0;
    for(let i=0; i<n; i++){
        if(a[i]>=x){
            extra+=(a[i]-x);
            c++;
        }
        else{
            if((a[i]+extra) >= x){
                extra=((a[i]+extra)-x);
                c++;
            }
            else{
                break
            }
        }
    }
    console.log(c);
    t--;
}