const input = require('readline-sync');
const b_str = input.question("ente the binary string: ");
let i =0;
let max_len = 0;
let ind = i+1;
let len = 0;
while(i<b_str.length-1){
    if(b_str[i] === '1'){
        if(b_str[i] === b_str[ind]){
            len++;
        }else{
            if(max_len<len){
                max_len = len;
            }
            len = 0;
        }
    }
    i++;
    ind++;
}
if(b_str.includes('1')){
    max_len++;
}
console.log("Consecutive Max Length: ", max_len);