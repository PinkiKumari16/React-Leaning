const library = [
    {
        'title': 'The Great Fatsby',
        'author': 'F. Scott Fitzgerald',
        'addedDate': new Date('2024-01-01')
    }
];

var input = require('readline-sync');

let addNewBook = ()=>{
    let title = input.question("Enter the Book Title:");
    let author = input.question("Enter the Author Name: ");
    let addedDate = input.question("Enter the Current Date: ");
    library.push({'title': title, 'author': author,'addedDate':addedDate});
}

let removeBook = () =>{
    let title = input.question('Enter the Book Name: ');
    let flag = false;
    for(let book of library){
        if(book.title === title){
            library(library.indexOf(book),1);
            flag = true;
            break
        }
    }
    if(!flag){
        console.log("This Book Not Exist!");
    }
}

const findRecentlyAddedBook = () =>{
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate()-30)
    for(let book of library){
        if(book.addedDate >= currentDate){
            console.log(book);
        }
    }
}

const displayAllBooks = () =>{
    for(let book of library){
        console.log(book);
    }
}