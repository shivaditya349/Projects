var numberOfDrumButtons = document.querySelectorAll(".drum").length; // total drums are seven, so length is 7.

for (var i = 0; i < numberOfDrumButtons; i++)  //loop for iteration
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()   // when i=0, we get first drum , function performs on click
  {
    var button = this.innerHTML; // first drum innerHTML is "w" when i=0
    makeSound(button);  //pass "w" to makeSound function
    buttonAnimation(button); // pass "w" to buttonAnimation function
  });

}

document.addEventListener("keypress", function(event) { //function performs on keypress

  makeSound(event.key); //if we press "w",event.key pass "w" to makeSound function
  buttonAnimation(event.key);

});

function makeSound(key) {  //Initialize makeSound function

  switch (key) { //pass our event.key or button
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); // if event.key or button === "w" then this case will run
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key); //if key not match with any case then this statement runs
  }
}
function buttonAnimation(currentKey) { //Initialize buttonAnimation to provide animation to our drums

  var activeButton = document.querySelector("." + currentKey); // from ".w" we select first drum element of HTML(i.e <button class="w drum">w</button>)
  activeButton.classList.add("pressed"); //add pressed class to drum
  setTimeout(function() 
  {
    activeButton.classList.remove("pressed"); //after 1s our pressed class removed 
  }, 100);

}
