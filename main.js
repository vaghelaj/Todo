var formGroup = document.getElementById('formGroup');
var addButton = document.getElementById('addButton');
var deleteButton = document.querySelectorAll('.trash');
var list = document.getElementById('list');

addButton.addEventListener('click', Brain, false);
// TODO: Make it so that when the user hits the enter button, it also adds the item value into the list.

for (var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].onclick = print;
}

function print() {
  console.log("I");
}

function Brain() {
  var input = document.getElementById('input').value;

  //Each new listItem will contain the latest user input.
  var listItem = document.createElement('li');
  var listItemValue = document.createTextNode(input);

  //Creating a 'checkbox' element that will be added along side the input string. Allowing the user to check or uncheck.
  var checkBox = document.createElement('input');
  checkBox.type= "checkbox";

  //Creating a span that will contain 'i' element with the given class name for the font icon.
  var removeItem = document.createElement('p');
  removeItem.className = "trash"
  removeItem.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

  //Checking if the input field is empty or not. If yes, printing a message in the console otherwise it the data is appended to the body.
  if(input === "") {
    console.log("empty item");
  }
  else {
    listItem.appendChild(checkBox);
    listItem.appendChild(listItemValue); //Lastly will append the listItem to the list.
    listItem.appendChild(removeItem);
    list.appendChild(listItem);
  }

  formGroup.reset(); //This line resets the form back to original state once the button is clicked.
}
