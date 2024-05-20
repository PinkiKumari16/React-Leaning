const input= require('readline-sync');
const weight = + input.question("enter weight: ");
const height = + input.question('enter the Height: ');

let bmi = weight/(height**2);
if(bmi <18.5){
    console.log("Under weigth");
}
else if(bmi>=18.5 && bmi <25){
    console.log("Normal Weigth")
}
else if(bmi>=25 && bmi<30){
    console.log("Overweigth");
}
else{
    console.log("Obese");
}