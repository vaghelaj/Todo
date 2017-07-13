'use strict';

var formGroup = document.getElementById('formGroup');
var addButton = document.getElementById('addButton');
var list = document.getElementById('list');
var input = document.getElementById('input');
var inputFields = document.getElementById('inputFields');
var task;

//This function performs all the functionality of the app. i.e it dynamically creates 'li' element with appropiate controls\.
function Brain(e) {
  var userInput = input.value;
  var random = Math.floor((Math.random() * 100) + 1);

  //Each new listItem will contain the latest user input.
  var listItem = document.createElement('li');
  listItem.className = "listItem"

  task = document.createElement('label');
  task.innerHTML = userInput;
  task.className = 'task';
  task.htmlFor = random;

  //Creating a 'checkboinputFields' element that will be added along side the input string. Allowing the user to check or uncheck.
  var checkBox = document.createElement('input');
  checkBox.type= "checkbox";
  checkBox.id = random;
  checkBox.className = "checkBox";

  //Creating a span that will contain 'i' element with the given class name for the font icon.
  var removeItem = document.createElement('i');
  removeItem.className = "fa fa-trash"

  //Checking if the input field is empty or not. If yes, printing a message in the console otherwise it the data is appended to the body.
  if(userInput === "") {

    console.log("empty item");
  }
  else {
    listItem.appendChild(checkBox);
    listItem.appendChild(task);
    listItem.appendChild(removeItem);
    list.appendChild(listItem);
  }

  formGroup.reset(); //Resets the form.
}

addButton.addEventListener('click', Brain, false);

// TODO: Make it so that when the user hits the enter button, it also adds the item value into the list.

/* Using event delegation, this click event is for the dynamically generated li elements.
When the trash can is clicked, it deletes the entire element. */
list.addEventListener('click', function(e) {

  e.stopPropagation();

  if(e.target && e.target.nodeName.toLowerCase() == 'i') {
    e.target.parentNode.remove();
  }
});
