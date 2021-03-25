document.addEventListener('DOMContentLoaded', function() {

    let back = document.querySelector("#back")

    back.onclick = function () {
      window.history.back();
    }

    let submit = document.querySelector("#submit")

    let name = document.querySelector("#name").innerHTML

    let weight_field = document.querySelector("#weight-field")

    submit.style.display = "none"

    let weight = document.querySelector("#weight")

    let w_field = document.querySelector("#weight-field") 

    weight.onclick = function () {
        
        weight.style.display = "none"

        submit.style.display = "block"

        let form = document.createElement("form")
        form.setAttribute('method',"post");
        form.id = "form";

        let i = document.createElement("input")
        i.type = "number"
        i.id = "weight"
        i.placeholder = "Enter weight"
        i.classList.add("form-control")
        i.style.marginTop = "25px"

        form.appendChild(i)
        w_field.appendChild(form)


        submit.onclick = function () {
           console.log(i.value) 
            fetch('/dog_weight', {
                method: 'POST', 
                body: JSON.stringify({
                  dog_name: `${name}`,
                  weight: `${i.value}`
                })
                
              })
              .then(response => response.text())
              .then(response => console.log(response))

              weight_field.innerHTML = `${name} weighs ${i.value} Kg's` 
              
        }



    }
    if (document.querySelector("#vacc-done")) {

    let v_done = document.querySelector("#vacc-done")

    let d_name = document.querySelector("#name")
    
    v_done.onclick = function () {

      fetch(`/vac_done/${d_name.innerHTML}`, {
        method: 'POST',
        body: JSON.stringify({
          d_name: `${d_name.innerHTML}`
        })
      })
      .then(response => response.text())
      .then(response => console.log(response))

      location.reload();
      return false;
    
    }
  }


    let remove = document.querySelector("#remove")

    let dg_name = document.querySelector("#name")

    remove.onclick = function () {

      fetch('/dogs', {
        method: 'POST',
        body: JSON.stringify({
          name: `${dg_name.innerHTML}`
        })
      })
      .then(response => response.text())
      .then(response => console.log(response))

      window.location.href = "/dogs";



    }


})