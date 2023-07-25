
let first_popup = document.getElementById("first_popup");
let addOption = document.getElementById("add-option");
// let blurdiv = document.getElementById("blur");

addOption.addEventListener("click",()=>{
    first_popup.classList.remove("hide");
})

function showpopup(){
    first_popup.classList.add("hide");
    // first_popup.style.
}




let id=0;
function add(){
    showpopup();
    let textfield = document.getElementById("textfield").value;
    // textfield.textContent = "";
    
    let flex_container = document.getElementById("flex_container");
    let card_container = document.createElement("div");
    card_container.classList.add("card_container");
    
    
    card_container.setAttribute("id", `card${id}`);
    id++;
    
    let card_title  = document.createElement("h4");
    card_title.textContent = textfield;
    
    
    let horiz = document.createElement("hr");


    let card_items = document.createElement("div");
    card_items.classList.add("card_items");

    // let list_items = document.createElement("p");
    // list_items.classList.add("list_items");
    // list_items.innerHTML = textfield2;



    let addbtn = document.createElement("button");
    addbtn.innerHTML = "➕"
    addbtn.classList.add("addbtn")
    
    let delbtn = document.createElement("button");
    delbtn.innerHTML ="🥡";
    delbtn.classList.add("delbtn")



    // Appending the container div//
    flex_container.appendChild(card_container);
    card_container.appendChild(card_title);
    card_container.appendChild(horiz);
    card_container.appendChild(card_items);
    // card_items.appendChild(list_items);
    card_container.appendChild(addbtn);
    card_container.appendChild(delbtn);

    addbtn.addEventListener("click",()=>{
        pop2.classList.remove("hide");
       
    })
    
    
}

let pop2 = document.getElementById("first_popup2");

function showpopup2(){
    pop2.classList.add("hide");
}


////////second popup ////////////


function additem()
{
    showpopup2();

    let textfield2 = document.getElementById("textfield2").value;

    let card_items= document.createElement("div");

    let todo_tasks = document.createElement("p");
    todo_tasks.classList.add("list_items");
    todo_tasks.innerHTML = textfield2;
    console.log(textfield2)
    
    // textfield2.textContent = "";
    card_items.appendChild(todo_tasks);
    
}


function deletecontainer()
{

    


}