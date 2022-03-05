
// cauch the id name from html file 

let headingTitle = document.querySelector('#headingTitle');
let whenFails = document.querySelector('#whenFails');
let names = document.querySelector("#names");
let point = document.querySelector('#point');
let rollNumber = document.querySelector('#rollNumber');
let boardName = document.querySelector('#boardName');

// input value 
let personName = prompt("Enter your Name");
let numbers = prompt("Enter your 'Point' number");
let roll = prompt("Enter your 'Roll' number");
let board = prompt("Enter your 'Board' name"); 


// calculation part 

if(numbers >= 5.00 ){
    headingTitle.innerHTML = " A+";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}

else if(numbers >= 4.00 && numbers <= 4.99){
    headingTitle.innerHTML = " A";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}
else if(numbers >= 3.50 && numbers <= 3.99){
    headingTitle.innerHTML = " A-";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}
else  if(numbers >= 3.00 && numbers <= 3.49){
    headingTitle.innerHTML = " B";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}
else  if(numbers >= 2.00 && numbers <= 2.99){
    headingTitle.innerHTML = " C";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}
else  if(numbers >= 1.00 && numbers <= 1.99){
    headingTitle.innerHTML = " D";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}
else  if(numbers < 1.00){
    headingTitle.innerHTML = " F";
    names.innerHTML = personName;
    point.innerHTML = numbers;
    rollNumber.innerHTML =  roll;
    boardName.innerHTML =  board;
}
else{
    headingTitle.innerHTML = ("Please! Enter Your Valid Information");    
}
