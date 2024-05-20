// const input = require('readline-sync');
// let t = Number(input.question('t: '));
// for(let i=0; i<t; i++){
//     let n = parseInt(input.question('n: '));
//     let a = input.question('list: ').split(" ");
//     const arr = a.map((ele)=>parseInt(ele));
//     const err_p = [];
//     for(let person=0;person<n-1; person++){
//         if(arr[person]!=arr[person+1]){
//             err_p.push(person)
//             err_p.push(person+1)
//         }
//     }
//     console.log((new Set(err_p)).size);
// }


const input = require('readline-sync');
let t = Number(input.question('t: '));
for(let i=0; i<t; i++){
    let n = parseInt(input.question('n: '));
    let a = input.question('list: ').split(" ");
    const arr = a.map((ele)=>parseInt(ele));
    let err_p = 0;
    for(let person=0;person<n; person++){
        if(person>0 && person<n-1){
            if(arr[person-1]===arr[person] && arr[person]===arr[person+1]){
                err_p=err_p;
            }
            else{
                err_p++;
            }
        }else if(person===0){
            if(arr[person]!==arr[person+1]){
                err_p++;
            }
        }
        else if(person===n-1){
            if(arr[person-1]!==arr[person]){
                err_p++;
            }
        }
    }
    console.log(err_p)
}


