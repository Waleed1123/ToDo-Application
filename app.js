var ulParent = document.getElementById("ulParent");
var input = document.getElementById("todoInput");

function addTodo(params) {
  if(!input.value) {
    alert("Enter Todo Value Please!")
    return
  };
  
  var liElement = document.createElement("li");
  var liTxt = document.createTextNode(input.value);
  liElement.appendChild(liTxt);
  liElement.className = "list-group-item d-flex justify-content-between align-items-center";

  var div = document.createElement("div");
  var editBtn = document.createElement("button")
  var deleteBtn = document.createElement("button")
  editBtn.innerHTML = "Edit";
  
  // SET ONCLICK EVENT
  editBtn.setAttribute("onclick", "editTodo(this)");
  deleteBtn.innerHTML= "Delete";

  deleteBtn.setAttribute("onclick" , "deleteTodo()");

  editBtn.className= "btn btn-info "
  deleteBtn.className= "btn btn-danger"
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  
  



  liElement.appendChild(div)
  
  
  ulParent.appendChild(liElement)

  input.value = ""



};


function editTodo(el){

  var li = el.parentNode.parentNode

  var placeHolder = li.firstChild.nodeValue
  var editValue = prompt("Edit ToDo.", placeHolder)
  console.log(editValue)

  li.firstChild.nodeValue = editValue;
};

function deleteBtn(elem){
  elem.parentNode.parentNode.remove()
};

function deleteAll(){
  ulParent.innerHTML = ""
}
