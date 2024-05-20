const isIsogrm = (str1)=>{
    let flag= true;
    for(let i=0;i<str1.length; i++){

        for(let j=i+1; j<str1.length;j++){
            if(str1[i] === str1[j]){
                flag = false;
                break;
            }
        }
        if(!flag){
            break;
        }
    }
    return flag
}

const input = require('readline-sync')
const str1 = input.question("enter the string: ").toLowerCase();
console.log(isIsogrm(str1));