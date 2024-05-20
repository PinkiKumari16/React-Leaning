// console.log("Hello pinki with js");
// const input = require("readline-sync");
// const userInput = input.question("enter the amount or membership: ");
// [membership, amount]= userInput.split(" ");
// console.log("membership: ",membership, "amount: ",amount);

// const calculateDiscount = (membership, amount)=>{
//     let Bill;
//     let discount;
//     if(membership === "gold" && amount>=50){
//         discount = Math.floor(amount*15/100);
//     }
//     else if( membership === "silver" && amount>=75){
//         discount = Math.floor(amount*10/100);
//     }
//     else if(membership==="regular" && amount>100){
//         discount = Math.floor(amount*5/100);
//     }
//     else if ((membership === "" || membership===" ") && amount>150){
//         discount = 5;
//     }
//     else{
//         discount= 0;
//     }

//     console.log("discount",discount)
//     Bill = amount-discount;
//     return Bill
// }

// let as = calculateDiscount(membership, amount)
// console.log("Total Bill: ",as);




// // *****************************  not done   *****************
// const input = require('readline-sync');
// const arry = input.question("enter the list");
// const userArray = arry.split(" ");
// console.log("new array: ",userArray);



//  Q.1  ****************
// const getArea = (r_length,r_breadth) =>{
//     let area;
//     area = (r_length*r_breadth);
//     return area
// }

// const input = require('readline-sync');
// const userInput = input.question("enter the length or breadth: ");
// const [r_length, r_breadth] = userInput.split(" ");

// console.log("Area of Rectangle: ",getArea(r_length, r_breadth));

//  Q.2  ****************
// const square = (num)=>{
//     return num*num;
// }
// const input = require('readline-sync');
// const userNumber = input.question("Enter the number: ");
// console.log("Square: ",square(userNumber));


// //  Q.3  ****************
// const isDivisible = (num1, num2) =>{
//     let res;
//     if(num1%num2 === 0){
//         res = Math.floor(num1/num2);
//     }
//     else{
//         res = "numbers are not divisible ";
//     }
//     return res
// }
// const input = require('readline-sync');
// const nums = input.question("enter the two numbers: ");
// const [num1, num2] = nums.split(' ');
// console.log(isDivisible(num1, num2));


// //  Q.4  ****************
// const findLastDigit = (userNumber) =>{
//     return (userNumber % 10);
// }
// const input = require('readline-sync');
// const userNumber = input.question("enter the number: ");
// console.log("Last Digit of the number: ", findLastDigit(userNumber));


// //  Q.5  ****************
// const getCube = (num) => {
//     return num**3
// }
// const input = require('readline-sync');
// const num = input.question("enter the number: ");
// console.log("Cube of the number: ", getCube(num));


// //  Q.6  ****************
// const reverseNumber = (num) => {
//     let rev = "";
//      let rev1 = 0;
//      let rev2 = '';
//     for(let digit of num){
//         rev = (digit+rev);
//     }
//     while(num){
//         let l_d = num%10
//         rev1 = rev1*10+l_d;
//         rev2 += l_d;
//         num = Math.floor(num/10);
//     }
//     return [rev, rev1, rev2]
// }
// const input = require('readline-sync');
// const num = input.question("enter the 3 digit number: ");
// if(num.length !== 3){
//     console.log("This is not a 3 digit number enter again");
// }
// else{
//     console.log("Reverse Number: ", reverseNumber(num))
// }


// //  Q.7  ****************
// const getFirstDigit = (num) =>{
//     return (num.slice(0,1))
// }
// const input = require('readline-sync');
// const num = input.question("enter the number: ");
// console.log("This is the First digit: ", getFirstDigit(num));


// //  Q.8  ****************
// const lastFirstDigitSum = (num) =>{
//     let sum = +(num[0])+(+(num.slice(-1)));
//     return sum
// }
// const input = require('readline-sync');
// const num = input.question("enter the number: ");
// console.log("The sum of First & Last Digit: ", lastFirstDigitSum(num));


// //  Q.9  ****************
// const findAverageSalary = (salaries) => {
//     let sum=0;
//     salaries.forEach((ele) => {
//         sum+=(+(ele));   
//     });
//     return sum/5
// }
// const input = require('readline-sync');
// const userInput = input.question("enter the employee's salary: ");
// const salaries = userInput.split(" ");
// console.log("Average Salary of Employees: ", findAverageSalary(salaries));


// //  Q.10  ****************
// const swap = (num1,num2) => {
//     num1 = num1+num2;
//     num2 = num1-num2;
//     num1 = num1-num2;
//     const dic = {'num1':num1, "num2":num2}
//     return dic
// }
// const input = require('readline-sync');
// const num1 = input.question("enter num1: ");
// const num2 = input.question("enter num2: ");
// const res = (swap(+num1,+num2));
// console.log(res);
// console.log("After Swap: Num1=",res.num1," Num2=",res.num2);


// const person = {
//     Name: 'Pinki',
//     LastName: 'Kumari',
//     age: 21,
//     getFullName: function(){
//         return this.Name+" "+this.LastName
//     }
// };
// console.log(person);
// console.log(person.getFullName())

// const obj1 = new Object();
// console.log(obj1);
// obj1.__proto__ = person;
// obj1.Name= "rinki";
// obj1.LastName= "Gupta";
// console.log(obj1);
// console.log(obj1.getFullName());


// **************************************


// const checkPalidrom = (str1)=>{
//     let s_ind = 0;
//     let e_ind = str1.length-1;
//     let flag = true;
//     while(s_ind<e_ind){
//         if(str1[s_ind] !== str1[e_ind]){
//             flag = false;
//             break
//         }
//         s_ind++;
//         e_ind--;
//     }
//     if (flag === true){
//         return true
//     }else{
//         return false
//     }
// }
// const input= require('readline-sync');
// let userInput = input.question("enter the string: ").toLowerCase();
// console.log(checkPalidrom(userInput))


// const arr = [2,3,4,5,6,6];
// arr.splice(-2,0,"pinki");
// console.log(arr);



for (let i=2; i<=8;
     i=Math.pow(i,2)){
    console.log(i);
    console.log("Hello pinki");
}
