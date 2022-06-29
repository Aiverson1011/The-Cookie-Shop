'use strict'


function generateGreeting(){
    let firstName = getFirstName(); // Mango
    let message = timeOfDay(); // Good Afternoon
    return document.write('Hello ' + firstName + ', ' + message + '!');
}

function getFirstName(){
    let firstName = prompt('What is your Name?'); //Mango
    return firstName;
}

function timeOfDay(){
    let time = prompt('What hour is it (0-24?)');
    let message = '';
    
    
    if(time <= 11 && time > 0){
        message = 'Good Morning!!';
    } else if(time <= 18){
     message = 'Good Afternoon!!';
    } else if(time <= 24){
     message = 'Good Night!!';
    } else{
      message = 'Good Day!!';
    }

    return message;
}

function getCookiePicture1(){
    let answer = prompt ('pick 1 or 2');
    let image = '';
    if(answer == 1){
        image = '<img class="subImage" alt="cookie image 1" src="https://via.placeholder.com/300x150.png?text=Cookie+pic+1">'
    } else {
        image = '<img class="subImage" alt="cookie image 1" src="Cookie.jpg">'

    }
    return document.write(image);
}

// while loop
// while(some condition is true){
// do something over and over and over again
//}

// guessNumberOfCats();
function guessNumberOfCats(){
// string !== string (Strict, not equals only used for similar data types)
// string === string (strict equals)
// string != int (loose, not equals use when crossing data types)
// string == int (loose, equals numeric to a string comparison)

//stringify (converting something to a string)

let answer = prompt('how many cats does Amanda have?'); // 3

    while(answer != 2){
        if(answer < 2){
            alert('too low');
        } else {
            alert('too high!');
        }
        answer = prompt('how many cats does Amanda have?'); // 2
    }

    alert('Congrats! you are correct!');

    let x = 0;

    while(x < 5){
        console.log(x);
        // need to do something with X so that it eventually becomes >= 5.
        //x = x + 1;
        x++;
    }
    
    console.log("i am done");
}

// doWhileExample();
function doWhileExample(){

    // do...while guarantees us at least ONE iteration
    let answer = '';
    do{
        answer = prompt('Guess a number between 1 - 5'); // 3
        if(answer < 3 ){
            alert('too low');
        } else if( answer > 3){
            alert('too high');
        } else{
            alert('CORRECT! The answer is 3!');
        }
    }while(answer != 3)

    console.log("Completed");

}

// forLoopExample();
function forLoopExample(){
    // 1. variable declaration & assignment
    // 2. condition that needs to be met
    // 3. what do we do with the variable once an iteration has completed

    let answer = prompt('How many stars would rate our cookie shop? (1 -5)'); // 3
 
    let output = '';
    for(let x = 0; x < answer; x++){
        output = output + "<img class='star' src='star.jpg' />"

    }
    //output = <img class='star' src='star.jpg' />
    // output =  <img class='star' src='star.jpg' /> <img class='star' src='star.jpg' />
    // output =  <img class='star' src='star.jpg' /> <img class='star' src='star.jpg' /> <img class='star' src='star.jpg' />


    console.log("i'm am done");

    return document.write(output);

}

