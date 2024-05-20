// var variable = false;

// let promt = new Promise((resolve, reject)=>{
//     if(variable){
//         resolve('Successfully');
//     }else{
//         reject('Reject ');
//     }
// });
// console.log(promt);


// function prom(com){
//     return new Promise((resolve,reject)=>{
//         if(com){
//             resolve('sucess');
//         }
//         else{
//             reject('error');
//         }
//     })
// }
// console.log(prom(false))


// function prom(a,b){
//     return new Promise((resolve,reject)=>{
//         console.log('wait data is fatching......');
//         let c = a/b;
//         setTimeout(()=>{
//             if(a,b){
//                 resolve(`Your answer if ${c}`);
//             }else{
//                 reject('Failed to calculate')
//             }
//         },2000)
//     })
// }

// prom(9,0).then((res)=>console.log(res)).catch((res)=>console.log(res));




// const hello= () =>{
//     console.log('Hello.')
// }
// setTimeout(hello,3000);

// function getData(id){
//     setTimeout(()=>console.log('Data:',id),2000);
// }
// getData(70);
// getData(1);
// getData(2);


// let pro = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve('I am Pinki')        
//     },3000);
// });
// pro.then(function(res){
//     console.log(res);
// })




//  // Q1.
// const sumNum = (a,b)=>{
//     console.log(a+b);
// }
// const myFunc = (a,b,callBackSum) =>{
//     setTimeout(()=>{
//         callBackSum(a,b)},2000);
    
// }
// myFunc(2,3,sumNum);


// const showDetails = () =>{
//     console.log('I am Pinki');
// }

// const display = (callback)=>{
//     setTimeout(callback,3000);
// }
// display(showDetails)




// let pro1 = new Promise((resolve, reject)=>{
//     let data ;
//     if(data){
//         resolve(data);
//     }else{
//         reject('Error');
//     }
// })
// console.log(pro1);
// pro1.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })



// let pro1 = new Promise((resolve, reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//         if(res.status===200){
//             console.log('success')
//             resolve(res);
//         }else{
//             reject('Error!!  data not found');
//         }
//     })
//     .catch((error)=>{
//         reject(error);
//     })
    
// })
// pro1.then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })



// const myfun = (url1)=>{
//     return new Promise((resolve,reject)=>{
//         fetch(url1)
//         .then((res)=>{
//             if(res.ok){
//                 resolve(res);
//             }
//             else{
//                 reject('Error');
//             }
//         })
//         .catch((error)=>{
//             reject(error);
//         })
//     })
// }

// let myPro = myfun('https://jsonplaceholder.typicode.com/posts');
// myPro.then((res)=>console.log(res)).catch((err)=>console.log(err));




// const myfun = (arr) =>{
//     let promises = arr.map((url1)=>{
//         return new Promise((resolve, reject)=>{
//             fetch(url1)
//             .then((response)=>{
//                 if(response.status === 200){
//                     resolve(response)
//                 }else{
//                     reject('Error');
//                 }
//             })
//             .catch((err)=>{
//                 reject(err);
//             })
//         })
        
//     })
//     return promises;
// }

// const arr = ['https://jsonplaceholder.typicode.com/posts/1',
//             'https://jsonplaceholder.typicode.com/posts/2',
//             'https://jsonplaceholder.typicode.com/posts/3',
//             'https://jsonplaceholder.typicode.com/posts/4'
//         ];
// let pomise_list = myfun(arr);
// console.log(pomise_list);




// const myfun = (arr) =>{
//     let promises = arr.map((url1)=>{
//         return new Promise((resolve, reject)=>{
//             fetch(url1)
//             .then((response)=>{
//                 if(response.status === 200){
//                     resolve(response)
//                 }else{
//                     reject('Error');
//                 }
//             })
//             .catch((err)=>{
//                 reject(err);
//             })
//         })
        
//     })
//     return promises;
// }

// const arr = ['https://jsonplaceholder.typicode.com/posts/1',
//             'https://jsonplaceholder.typicode.com/posts/2',
//             'https://jsonplaceholder.typicode.com/posts/3',
//             'https://jsonplaceholder.typicode.com/posts/4'
//         ];
// let pomise_list = myfun(arr);
// console.log(Promise.all(pomise_list));
// console.log(pomise_list);

//    Callback hall    ********************************8
// const getData = (id,nextData) =>{
//     setTimeout(()=>{
//         console.log('data:',id);
//         if(nextData){
//             nextData();
//         }
//     },3000);
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// });



//  //  ***********************    promise chaing
// const getData = (id) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data:',id);
//             resolve('success');
//         },3000);
//     })
    
// }
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

// getData(1).then(()=>{
//     return getData(2);
// })
// .then(()=>{
//     return getData(3)})
// .then((res)=>{
//     console.log(res);
// })


// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('data find')
//             resolve('success')
//         },3000);
        
//     })
// }

// let pro = getPromise();
// console.log(pro);



// let api ="https://api.github.com/users/pinkikumari16";
// async function getData(){
//     let response = await fetch(api);
//     let data = await response.json();
//     console.log(data.login);
// }
// getData();