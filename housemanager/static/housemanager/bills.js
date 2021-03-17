document.addEventListener('DOMContentLoaded', function() {
    
let bill_list = document.querySelector("#bills")

console.log(bill_list)

let add_bill = document.querySelector("#bill-button")



add_bill.onclick = function () {
    add_bill.style.display = "none";

    let form = document.createElement("form")
    form.setAttribute('method',"post");
    form.id = "form";
    

    let name = document.createElement("input")
    name.type = "text"
    name.classList.add("form-control")
    name.id="bill-name"
    name.placeholder = "Enter bill title"
    name.style.marginTop = "20px"
    

    let amount = document.createElement("input")
    amount.type = "number"
    amount.classList.add("form-control")
    amount.id="amount"
    amount.placeholder = "Enter bill amount"
    amount.style.marginTop = "20px"

    let due = document.createElement("input")
    due.type = "date"
    due.classList.add("form-control")
    due.id="amount"
    due.placeholder = "Enter due date"
    due.style.marginTop = "20px"

    let submit = document.createElement("input")
    submit.type = "submit"
    submit.classList.add("btn-primary")
    submit.style.margin = "20px"
    

    form.appendChild(name)
    form.appendChild(amount)
    form.appendChild(due)
    form.appendChild(submit)

    bill_list.appendChild(form)

    form.onsubmit = function () {

        fetch('/add_bill', {
            method: 'POST', 
            body: JSON.stringify({
              name: `${name.value}`,
              amount: `${amount.value}`,
              due: `${due.value}`
            })
            
          })
          .then(response => response.text())
          .then(response => console.log(response))

    }






}
       
    
    
    



})