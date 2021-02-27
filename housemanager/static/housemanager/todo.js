document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  let b = document.createElement("button")

    b.innerText = "Add todo"

    b.value = "Add todo"

    b.classList = "todo-button"

    b.id = "todo-button"

    b.style.display = "none"
   


  
    create_todo.onclick = function () {
        
      let list = document.querySelector("#ullist");
      let f = document.createElement("form");
      f.setAttribute('method',"post");
      f.id = "todo-form";
      

      let i = document.createElement("input");
      i.type = "text";
      i.name = "new-todo";
      i.id = "new-todo";
      i.placeholder = "add todo";
      i.style.marginTop = "25px";
      


     
      i.classList.add("form-control")
    
      console.log(f.id)

     
      f.appendChild(i)
     
      list.appendChild(f)

      create_todo.style.display = "none";

      b.style.display = "block"

      list.appendChild(b)
      



    }


})