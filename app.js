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



// getGreeting(firstName);
// function getGreeting(yourName){
//     console.log('Hello, ' + yourName );
//     console.log('this was run from the function');
// }
