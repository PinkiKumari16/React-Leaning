let input = require('readline-sync');
let t = parseInt(input.question('t: '));
for(let i = 0; i<t;i++){
   let n=Number(input.question('N: '));
    let list = input.question('List: ').split(" ");
    let arr = list.map((ele)=>parseInt(ele));

    let s = new Set();
    let max_people = 0;
    for(let id of arr){
        if(s.has(id)){
            s.delete(id);
        }else{
            s.add(id)
        }
        max_people = Math.max(max_people,s.size);
           
    }
    console.log(max_people);
    
}

