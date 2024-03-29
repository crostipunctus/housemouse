document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  
  let add_todo = document.querySelector("#add-todo")
  

  add_todo.style.display = "none";
    
  let checkboxes = document.querySelectorAll("#todo-done")
  


  checkboxes.forEach(element => {
    console.log(element.dataset.id)


    element.onclick = function () {
      element.checked == true;
      let id = element.dataset.id
  
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

         
      let opt_label = document.createElement("label")
      opt_label.innerHTML = "Choose a category:"

      let options = document.createElement("select")
      let opt_1 = document.createElement("option")
      opt_1.text = "Dogs"
      let opt_2 = document.createElement("option")
      opt_2.text = "Bills"
      let opt_3 = document.createElement("option")
      opt_3.text = "Baby"

      options.classList.add("form-select")
      options.style.marginTop = "20px"


      options.add(opt_1)
      options.add(opt_2)
      options.add(opt_3)
      
      f.appendChild(i)
      f.appendChild(d)
      f.appendChild(options)
      list.appendChild(f)

      

      create_todo.style.display = "none";
      add_todo.style.display = "block";
  

      add_todo.onclick = function() {
       
        fetch('/update_todo', {
          method: 'POST', 
          body: JSON.stringify({
            todo: `${i.value}`,
            date: `${d.value}`,
            category: `${options.value}`
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

      location.reload();
        return false;
      
      }

      
      
  



    }


})