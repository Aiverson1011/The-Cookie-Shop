'use strict'
// use strict tells us to follow some baseline 'strict rules' 

// variables = storing data as values. 

// Comment out in mass 
// highlight all the lines
// CTRL + K + C

// declaring the variable firstname to be equal to the value of amanda
// let firstName = 'Amanda'; // string
// let lastName = "Iverson"; // single or double quotes are acceptable
// let numberOfCats = 2; // number
// let lovesCoffee = true; // boolean

// dynamic 
let firstName = prompt('What is your Name?');
let time = prompt('What hour is it (0-24?)');
let message = '';
// of the time of day is before noon then we want to say "Good Morning"

// other comparisons:
// <= less than or equal too
// < less than
// >= greater than or equal too
// > greater than
// === strict equal
// == loose equal (comparing numeric to strings)
if(time <= 11){
    message = 'Good Morning!!';
    //console.log('Good Morning!!');
} else if(time <= 18){
    message = 'Good Afternoon!!';
   // console.log('Good Afternoon!!');
} else if(time <= 24){
    message = 'Good Night!!';
    //console.log('Good Night!');
} else{
    message = 'Good Day!!';
   // console.log('Have a Great Day!');
}

// console.log('done with program');

document.write('Hello '+ firstName + '! ' + message);

// Amanda is not equal to amanda
// === strict equals
// == loose equals (truthy or a fasly) '1' == 1
// if(firstName.toLowerCase() === 'amanda'){
//     console.log('Your name is amanda!');
// }

// output to the console some value
//console.log('your age is: ' + age);
//  console.log('You have ' + numberOfCats + ' cats');