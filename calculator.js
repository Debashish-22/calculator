// display bar
var display = document.getElementById('display');
// inputs from buttons
var input = document.getElementsByClassName('input');
// clear button
var clear = document.getElementById('clear');
// back button
var back = document.getElementById('back');
// result button
var result = document.getElementById('result');
// Initially empty string all values will be stored here
var string = "";

// To get values of the button
for(var i = 0;i<input.length;i++){
    input[i].addEventListener('click' , function(){

        var value = this.getAttribute('value');
        string =string.concat(value);
        display.innerText =string;
    })
}
// result functionality
function output(){
    try{
        var out = eval(string);
        display.innerText = out;
        string="";
    }
    catch{
        display.innerText = "Error";
    }  
}
// calling function when click on screen =
result.addEventListener('click', output);

// // Read keyboard inputs and evaluate on pressing enter
document.addEventListener('keypress', function(event){

    event.preventDefault();

    if(event.key === "Enter"){
        return output(); 
    }
    else{
        string = string.concat(event.key);
        display.innerText =string;
    }
})
// Clear functionality
clear.addEventListener('click', function(){
    string="";
    display.innerText="";
})
// Back functionality
back.addEventListener('click', function(){
    string = string.slice(0,-1);
    display.innerText = string;
})
// Back functionality for keyboard on clicking backspace button
document.addEventListener('keydown', function(event){
    if(event.key === "Backspace"){
        string = string.slice(0, -1);
        display.innerText = string;
    }
})