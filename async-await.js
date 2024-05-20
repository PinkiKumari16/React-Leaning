// async function hello(){
//     console.log('hello pinki');
// }
// hello();



// async function hello(){
//     setTimeout(()=>{
//         console.log('hello pinki');
//     },3000);
// }
// hello();


// function api(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('weather data',id);
//             resolve(200)
//         },3000);
//     })
// }

// async function getWeather(){
//     await api(1);
//     await api(2);
// }
// getWeather();

const getData = (id) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('get data ',id);
            resolve('success');
        },3000);
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}
getAllData();