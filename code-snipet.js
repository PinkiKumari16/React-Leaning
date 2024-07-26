// var scope = 'global scope';
// function check(){
//     var scope = 'local scope';
//     function f(){
//         return scope;
//     }
//     return f;
// }
// let fun = check()
// console.log(fun())


// function func1(){
//     setTimeout(()=>{
//         console.log(x)
//         console.log(y)
//     },3000);
//     var x = 2;
//     let y = 12;
// }
// func1()
// function func2(){
//     for(let i=0; i<3; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },2000);
//     }
// }
// func2()
// (function(){
//     setTimeout(()=> console.log(1), 2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
// })();