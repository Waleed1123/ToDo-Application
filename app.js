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

  console.log(liElement)
};