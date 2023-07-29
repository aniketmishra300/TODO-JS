
let first_popup = document.getElementById("first_popup");
let addOption = document.getElementById("add-option");
// let blurdiv = document.getElementById("blur");



let id=1;
let card_items , card_container , textfield_value, delbtn , cardremove,
span;

function add(){
    showpopup()
    
    let textfield = document.getElementById("textfield")
    textfield_value = textfield.value;
    // textfield.textContent = "";
    
    let flex_container = document.getElementById("flex_container");
    
    //// card box//////
    card_container = document.createElement("div");
    card_container.classList.add("card_container");
    card_container.setAttribute("id", `card${id}`);
    id++;
    

    let card_title  = document.createElement("h2");
    card_title.textContent = textfield_value;
    
    
    let horiz = document.createElement("hr");
    
    
    card_items = document.createElement("div");
    card_items.classList.add("card_items");

    

    let list_items = document.createElement("p");
    list_items.classList.add("list_items");


    span = document.createElement("span");
        // span.innerHTML = ""
    // list_items.innerHTML = textfield2;



    let addbtn = document.createElement("button");
    addbtn.innerHTML = "➕"
    addbtn.classList.add("addbtn")

    
    delbtn = document.createElement("button");
    delbtn.innerHTML ="🥡";
    delbtn.classList.add("delbtn");
  



    // Appending the container div//
    flex_container.appendChild(card_container);
    card_container.appendChild(card_title);
    card_container.appendChild(horiz);
    card_container.appendChild(card_items);
    card_items.appendChild(list_items);
    list_items.appendChild(span);
    card_container.appendChild(addbtn);
    card_container.appendChild(delbtn);




    addbtn.addEventListener("click",()=>{
        pop2.classList.remove("hide");
       
    })
    
    delbtn.addEventListener("click",()=>{
        let card_remove = delbtn.parentElement.remove();
        console.log(card_remove);
    })
}


////////////////////*************************************************/

addOption.addEventListener("click",()=>{
    first_popup.classList.remove("hide");
})

function showpopup(){
    first_popup.classList.add("hide");
}

////////*************************************************************/

let pop2 = document.getElementById("first_popup2");

function showpopup2(){
    pop2.classList.add("hide");
}


////////second popup ////////////

// let special_card = document.getElementById(`$card{id}`)

function additem()
{
    showpopup2();

    let textfield2 = document.getElementById("textfield2").value;
    let todo_tasks = document.createElement("p");
    todo_tasks.classList.add("list_items");
    todo_tasks.innerHTML = textfield2;
    console.log(textfield2)

    let spantag = document.createElement("span");
    spantag.classList.add("Mark_done");
    spantag.textContent = "Mark Done";

    
    card_items.appendChild(todo_tasks);
    todo_tasks.appendChild(spantag);
    


    spantag.addEventListener("click",()=>{
        spantag.style.display = "none"
        todo_tasks.style.textDecoration = "line-through"
    })
}






    


    