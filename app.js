//  GETTING UL AND INPUT
var ulParent = document.getElementById("ulParent");
var input = document.getElementById("todoInput");

// A FUNCTION TO RUN THE PROCESS
function addTodo() {
  // CONDITION TO AVOID EMPTY VALUES
  if(!input.value) {
    alert("Enter Todo Value Please!")
    return
  };
  
  // CREATING LI (LIST ITEMS) ELEMENT DYNAMICALLY
  var liElement = document.createElement("li");
  var liTxt = document.createTextNode(input.value);
  liElement.appendChild(liTxt);
  // CLASS OF LI ELEMENT
  liElement.className = "list-group-item d-flex justify-content-between align-items-center";

    // CREATING BUTTONS IN LI (LIST ITEMS)
  var div = document.createElement("div");
  var editBtn = document.createElement("button")
  var deleteBtn = document.createElement("button")
  editBtn.innerHTML = "Edit";
  
  // SET ONCLICK EVENT
  editBtn.setAttribute("onclick", "editTodo(this)");
  deleteBtn.innerHTML= "Delete";

  deleteBtn.setAttribute("onclick" , "deleteTodo(this)");

  editBtn.className= "btn btn-info "
  deleteBtn.className= "btn btn-danger"

  // APPENDING ALL THE EFFERT IN DOCUMENT
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  // APPENDING LI WITH BUTTONS IN DIV
  liElement.appendChild(div)
  
  // APPENDING LI IN UL
  ulParent.appendChild(liElement)


  // SETTING EMPTY VALUE
  input.value = ""



};

// A FUNCTION TO EDIT LI ITEMS IF WRONG
function editTodo(el){

  var li = el.parentNode.parentNode

  var placeHolder = li.firstChild.nodeValue
  var editValue = prompt("Edit ToDo.", placeHolder)
  // console.log(editValue)

  li.firstChild.nodeValue = editValue;
};

  // FUNCTION TO DLETE ANY ITEM IN THE LIST
function deleteTodo(elem){
  elem.parentNode.parentNode.remove()
};

  // DELETING ALL VALUES BY ONCE..
function deleteAll(){
  ulParent.innerHTML = ""
};


// THANK YOU SOO MUCH FOR READING THIS CODE..... 




