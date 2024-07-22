// objects in javscript
// object creation and access
// task 1
const book= {
    nameofbook : "atomihabit",
    author : "abhishek",
    year :2004 ,

}
console.log(book);

// task 2

 console.log(book.nameofbook);
 console.log(book["author"]);

// object methods
// task 3
 
let book1= {
title : "yayati",
author :"abhishek",
year : 0 ,

getBookInfo: function(){
    return `title:${this.title} , author : ${this.author} ,year :${this.year}`;
} ,

// task 4

updateYear : function( newYear ){
    this.year = newYear ;
    console.log(this.getBookInfo());
}
}
book1.updateYear(2024);


// nested objects
// task 5 and 6

let library = {
    name : "ghatkopar library",
    books :[
        {title : "yayati",
            author :"abhishek",
            year : 2024,
            
            getBookInfo: function(){
                return `title:${this.title} , author : ${this.author} ,year :${this.year}`;
            }
        },
        {title : "laita",
            author :"prasad",
            year : 2029,
            
            getBookInfo: function(){
                return `title:${this.title} , author : ${this.author} ,year :${this.year}`;

            },
        },
    ],

getlibraryInfo : function(){
    return `library name :${this.name} ,number of books :${this.books.length}`;

},
};
console.log(library);
console.log(library.getlibraryInfo());
library.books.forEach(book => console.log(book.getBookInfo()));

// the this keyword 
// task 7
let book2= {
    title : "yayati",
    author :"abhishek",
    year : 2027,
    
    getBookInfo: function(){
        return `title:${this.title} , author : ${this.author} ,year :${this.year}`;
    } 
}
console.log(book2);

// object iteration 
// task 8 
let book3= {
    title : "yayati",
    author :"abhishek",
    year : 2027,
    
    getBookInfo: function(){
        return `title:${this.title} , author : ${this.author} ,year :${this.year}`;
    } 
};
for(let property in book){
    if (book.hasOwnProperty(property)){
        console.log(`${property}:${book[property]}`);
    }
}
// console.log(book3);

//  use object.keys and object.values
// task 9
let book5 = {
    title: "Yayati",
    author: "Abhishek",
    year: 2024,
    getBookInfo: function() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
};

// Use Object.keys() to get an array of property names and log them
const propertyNames = Object.keys(book);
console.log("Property Names:");
propertyNames.forEach(key => {
    console.log(key); // Logs the property names
});

// Use Object.values() to get an array of property values and log them
const propertyValues = Object.values(book);
console.log("\nProperty Values:");
propertyValues.forEach(value => {
    if (typeof value === 'function') {
        // Log function definitions differently
        console.log(`[Function] ${value.toString()}`);
    } else {
        console.log(value); // Logs the property values
    }
}); 
// NOTE : not getting that much



