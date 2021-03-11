document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  
  let add_todo = document.querySelector("#add-todo")
  

  add_todo.style.display = "none";
   
  let checkboxes = document.querySelectorAll("#todo-done")
  


  checkboxes.forEach(element => {
    console.log(element.dataset.id)

    fetch(`/todo_done_id/${element.dataset.id}`)
            .then(response => response.json())
            .then(data =>  {
              let obj = data.Message
              
              
            

              if (obj === "true")
              {
                console.log("yes")
                let done = document.querySelector(`.listitem[data-id="${element.dataset.id}"]`)
                console.log(done)
                done.remove()
                
              }
              else {
                console.log("no")
              }
            })

    element.onclick = function () {
      element.checked == true;
      let id = element.dataset.id
      console.log(id)
      let done_do = document.querySelector(`.listitem[data-id="${element.dataset.id}"]`)
      done_do.remove()
      
      fetch('/todo_done', {
        method: 'POST', 
        body: JSON.stringify({
          id: `${id}`,
         
        })
      })
      .then(response => response.text()) 


    }



  })


  
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

      let d = document.createElement("input");
      d.type = "date";
      d.name = "date_todo";
      d.id = "date_todo";
      d.placeholder = "dd-mm-yy";
      d.style.marginTop = "25px";
      d.classList.add("form-control")

      let c = document.createElement("input")
      c.type = "checkbox";
      c.id = "todo-done";


   
      f.appendChild(i)
      f.appendChild(d)
      
      list.appendChild(f)

      create_todo.style.display = "none";
      add_todo.style.display = "block";

      add_todo.onclick = function() {
       
        fetch('/update-todo', {
          method: 'POST', 
          body: JSON.stringify({
            todo: `${i.value}`,
            date: `${d.value}`
          })
        })
        .then(response => response.text()) 
       
      
      let new_todo = document.createElement("li")
      new_todo.classList = "listitem"
      new_todo.innerHTML = `${i.value}: ${d.value}`
      new_todo.appendChild(c)
      list.appendChild(new_todo)
      f.style.display = "none";
      add_todo.style.display = "none";
      create_todo.style.display = "block";
      
      }

      
      
      



    }


})