// let str = 'Pinki Kumari';
// console.log(str.length);

// let lowerStr = str.toLowerCase();
// console.log(lowerStr)

// let upperCase = str.toUpperCase();
// console.log(upperCase);

// console.log(str.includes('i'));
// console.log(str.startsWith('p'))
// console.log(str.endsWith('i'));
// console.log(str.search('Ku'));
// console.log(str.match('Pinki'));
// let num = '445.4';
// let pi = parseInt(num);
// console.log(pi);

// const checkSwap = (s1,s2) =>{
//     if(s1.legth !== s2.legth){
//         return false
//     }
//     else{
//         let s11=s1.split("").toSorted().join("");
//         let s22=s2.split("").toSorted().join("");
//         if(s11 === s22){
//             return true
//         }else{
//             return false
//         }
//     }

// }
// const input = require('readline-sync');
// let s1 = input.question('S1: ');
// let s2 = input.question('S2: ');
// console.log(checkSwap(s1,s2));


// ************  Count methods  ******************

// let count = require('collect.js');
// const a = [1,3,5,3,3,2,3,2];

// const arr = count(a);
// console.log(arr.count(3))




// // ************   Symbol()   Data Type   ***********************
// var x = Symbol();
// console.log(x);

// let x = Symbol('hello');
// let y = Symbol('hello');
// console.log(x,y);
// console.log(typeof(x),typeof(y));

// let x = Symbol();
// let y = Symbol();
// console.log(x==y);
// console.log(typeof(x)===typeof(y))


// let x = Symbol('hello');
// x=Symbol(45);

// let y = Symbol('hello');
// alert(x.toString());  // we cann't use symbol value derect in the document. first we have to change the datatype into the string and then use in the doc.
// alert(x.description);



// let age =Symbol();
// const obj = {
//     name: 'Pinki',
//     class: 'Gradute',
//     [age]: 21
// }
// console.log(obj);


// let age =Symbol();
// const obj = {
//     name: 'Pinki',
//     class: 'Gradute',
// }
// obj[age] = 21;
// // console.log(obj);
// // console.log(obj.name);
// // console.log(obj.age);
// console.log(obj[age].toString());

// for(let i in obj){    // when we used for loop then it will skip the symbol variable
//     console.log(obj[i]);
// }

// console.log(JSON.stringify(obj))  // when we convert the js object into the json formate, it also skip the symbol variable.




//// ********************   Iterators function **************
// let num = [1,2,3,4,5,6];
// let iter = num[Symbol.iterator]();

// iter.next();
// console.log(iter.next());
// console.log(iter.next());
// iter.next();
// console.log(iter.next().value);
// console.log(iter.next());
// console.log(iter.next().done);

// let res = iter.next();
// while(!res.done){
//     console.log(res.value);
//     res = iter.next();
// }

// let str = 'Pinki kumari';
// let int = str[Symbol.iterator]();

// let i = int.next();
// while(!i.done){
//     console.log(i.value);
//     i=int.next();
// }

// let arr = [1,2,3,4,5,6];
// function arrIrator(arr){
//     let ind = 0;
//     return{
//         next(){
//             if(ind<arr.length){
//                 return{
//                     value: arr[ind++],
//                     done: false
//                 }
//             }
//             else{
//                 return{
//                     value: undefined,
//                     done: true
//                 }
//             }
            
//         }
//     }
// }

// let x = arrIrator(arr);
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());



