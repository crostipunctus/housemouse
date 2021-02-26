document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  
    create_todo.onclick = function () {
        
      let list = document.querySelector("#ullist");
      let f = document.createElement("form");
      f.setAttribute('method',"post");
      f.setAttribute('action',"submit.php");

      let i = document.createElement("input");
      i.type = "text";
      i.name = "new-todo";
      i.id = "new-todo";
      i.placeholder = "add todo";

     
      i.classList.add("form-control")
    
      console.log(f)

     
      f.appendChild(i)
     
      list.appendChild(f)



    }


})