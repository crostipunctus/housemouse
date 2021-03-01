document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  
  let add_todo = document.querySelector("#add-todo")
  

  add_todo.style.display = "none";
   


  
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
    
      

     
      f.appendChild(i)
     
      list.appendChild(f)

      create_todo.style.display = "none";
      add_todo.style.display = "block";

      add_todo.onclick = function() {
       
        fetch('/update-todo', {
          method: 'POST', 
          body: JSON.stringify({
            todo: `${i.value}`
          })
        })
      
      
      
      }

      

      



    }


})