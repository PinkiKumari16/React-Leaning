const input= require('readline-sync');
const list1 = input.question("enter the number: ").split(" ");
console.log(list1);
let sum=0;
for(let ele of list1){
    ele=+ele;
    if(ele > 0){
        sum+=ele;
    }
}
console.log("sum of Positive number: ",sum);