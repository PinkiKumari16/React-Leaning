//  for i in range(int(input('t: '))):
    //  a,b,c = map(int,input().split())
    //  if(a+b == c or b+c == a or a+c == b):
        //  print('Yes')
    //  else:
        //  print('No')





const input = require('readline-sync');
let t = parseInt(input.question('t: '));
while(t){
    let [a,b,c] = input.question('a,b,c: ').split(' ').map(Number);
    if(a+b === c || a+c === b || b+c === a){
        console.log('Yes');
    }
    else{
        console.log('No')
    }
    t--;

}


