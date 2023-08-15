const form = document.querySelector("form");
const lists = document.querySelector("#list");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const valueProduct = form.querySelector("#product").value;
    const valueQuantity= form.querySelector("#qty").value;
    const list = document.createElement("li");
    list.innerText=`${valueQuantity} ${valueProduct}`;
    lists.append(list);
});