document.addEventListener('DOMContentLoaded', function() {

  let create_todo = document.querySelector("#create-todo")
  
    create_todo.onclick = function () {
        
      let list = document.querySelector("#ullist");
      let f = document.createElement("form");
      f.setAttribute('method',"post");
      f.setAttribute('action',"submit.php");

      let i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"username");

      let s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Submit");

      
      f.classList.add("form-group")
      console.log(f)

      f.appendChild(i)
      f.appendChild(s)
      list.appendChild(f)



    }


})