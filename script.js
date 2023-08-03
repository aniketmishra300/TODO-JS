
let first_popup = document.getElementById("first_popup");
let addOption = document.getElementById("add-option");
// let blurdiv = document.getElementById("blur");



let id=1 , id2=1;
let card_items , card_container , textfield_value, 
delbtn , cardremove,span,card_title , flex_container, app
,back,card_heading,single;


////////////////first function start **************////////////
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function add(){
    hidepopup()
       
    let textfield = document.getElementById("textfield")
    textfield_value = textfield.value;
    // textfield.textContent = "";
    
    single=document.getElementById("single");
    single.style.visibility = "hidden";

    flex_container = document.getElementById("flex_container");
    
    //// card box//////
    
    card_container = document.createElement("div");
    card_container.classList.add("card_container");
    card_container.setAttribute("id", `card${id}`);
    id++;
    

    card_title  = document.createElement("h2");
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
   delbtn.setAttribute("id", `card${id2}`);
    id2++;
  

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
    

    //////////****for deleting the card */

    delbtn.addEventListener("click",()=>{
        if(id === id2)
        {
            let card_remove = delbtn.parentElement.remove();

        }

        // console.log(card_remove);
    })


    ///////// for Accessing the single card ********************////////
    card_heading = document.getElementById("card_heading");
    app = document.getElementById("app-container");
    back = document.getElementById("back");
    

    /////////single card heading active********

    let ab;

    card_title.addEventListener("click",()=>{
        
        flex_container.style.visibility = "hidden";
        app.style.visibility = "hidden";
        card_heading.innerHTML = textfield_value;
        // console.log(card_heading[0])
        back.style.visibility = "visible";
        single.style.visibility = "visible";


        let create1 = document.createElement("div");
        ab= document.getElementsByClassName("card_container");
        
        single.appendChild(create1);
        create1.appendChild(ab[0]);
    })

    
}

////////////////first function ends **************////////////
/////////////////////////////////////////////////////////////



function backbtn(){
    flex_container.style.visibility = "visible";
    app.style.visibility = "visible";
    back.style.visibility = "hidden";
    // ab.style.visibility = "hidden";
    card_heading.innerHTML = "";
    
}

////////////////////***********************************************/

let blur = document.getElementById("blur");
addOption.addEventListener("click",()=>{
    first_popup.classList.remove("hide");
    blur.style.filter = "blur(3px)";
    // flex_container.style.filter = "blur(3px)";
})

function hidepopup(){
    first_popup.classList.add("hide");
    blur.style.filter = "blur(0px)";
    // flex_container.style.filter = "blur(0px)";
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
    

////////// ****** mark done *****************////////

    spantag.addEventListener("click",()=>{
        spantag.style.display = "none"
        todo_tasks.style.textDecoration = "line-through"
        todo_tasks.style.color = "red"
    })



}








    

