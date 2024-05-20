// Given a string S consisting of only lowercase and uppercase English letters and spaces, your task is to convert it into title case. In title case, the first letter of each word is capitalized while the rest are in lowercase, except for words that are entirely in uppercase (considered as acronyms), which should remain unchanged.

const input = require('readline-sync');
const str1 = input.question("enter the string: ");
arr1 = str1.split(" ");
for(let ele in arr1){
    let newEle;
    if(arr1[ele].toUpperCase() !== arr1[ele]){
        let Ele = arr1[ele].toLowerCase();
        newEle= Ele.replace(Ele[0],Ele[0].toUpperCase())   
    }
    else{
        newEle = arr1[ele];
    }
    arr1[ele] = newEle;
}
console.log(arr1.join(" "))
