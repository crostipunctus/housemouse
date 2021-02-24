document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  
    create_todo.onclick = function () {
        document.querySelector("#todolist").style.background = "red";
        console.log("hello")
    }


})