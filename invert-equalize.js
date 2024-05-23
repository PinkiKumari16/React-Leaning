let input = require('readline-sync');
let t = + input.question('t: ');
while(t){
    let n = +input.question('n: ');
    let s = input.question('string: ');
    let c_0 = 0;
    let c_1 = 0;

    for(let i=0; i<n; i++){
        if(i==n-1){
            if(s[i]==='1'){
                c_1++;
            }
            else{
                c_0++;
            }
        }
        else{
            if(s[i] == '1'){
                if(s[i] !== s[i+1]){
                    c_1++;
                }
            }
            else{
                if(s[i] !== s[i+1]){
                    c_0++;
                }
            }
        }
    }
    c_0 <= c_1? console.log(c_0) : console.log(c_1); 
    t--;
}