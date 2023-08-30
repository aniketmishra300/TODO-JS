
let first_popup = document.getElementById("first_popup");
let addOption = document.getElementById("add-option");
let create1 = document.getElementById("single");
let body = document.querySelector("body")      
let flex_container = document.getElementsByClassName("flex_container");
let card_heading = document.getElementById("card_heading");
let app = document.getElementById("app-container");
let back = document.getElementById("back");
let addtask = document.getElementById("add");


let selectedcard = false;


let textfield_value,cardremove,single,addbtn;


////////////////first function start ************** ////////////
///////////////////////////////////////////////////////////////

function add(){

    hidepopup();

    let textfield = document.getElementById("textfield");
    textfield_value = textfield.value;
    // textfield.textContent = "";
    addtask.style.display = "block";
    
    
    //// card box //////
    
   let card_container = document.createElement("div");
    card_container.classList.add("card_container");
   
    

    let card_title  = document.createElement("h2");
    card_title.textContent = textfield_value;
    
    
    let horiz = document.createElement("hr");
    
    
    let card_items = document.createElement("div");
    card_items.classList.add("card_items");
    

    

    // let list_items = document.createElement("p");
    // list_items.classList.add("list_items");


    // let span = document.createElement("span");



    addbtn = document.createElement("button");
    addbtn.innerHTML = "➕";
    addbtn.classList.add("addbtn");
    

    
    let delbtn = document.createElement("button");
    delbtn.innerHTML ="🥡";
    delbtn.classList.add("delbtn");

  

    // Appending the container div//

    flex_container[0].appendChild(card_container);
    card_container.appendChild(card_title);
    card_container.appendChild(horiz);
    card_container.appendChild(card_items);
    card_container.appendChild(addbtn);
    card_container.appendChild(delbtn);
    


    
    addbtn.addEventListener("click",()=>{
        
        createitem(card_items);
        
    })

    function createitem(card_items) {

        var tittle2 = document.createElement("h3");
        tittle2.classList.add("new-list");
        card_items.appendChild(tittle2);

        let body = document.querySelector("body");

        let pop2 = document.createElement("div");
        pop2.setAttribute("id", "first_popup2");
        pop2.classList.add("first_popup2");
        // pop2.style.display = "block";

        let tittle3 = document.createElement("h2");
        tittle3.textContent = "Add the List";
        tittle3.style.color = "red"

        let input3 = document.createElement("input");
        input3.setAttribute("id","textfield2");
    
        tittle2.innerText = input3.value;

        let buttontogether=document.createElement("span")

        let Add2 = document.createElement("button");
        Add2.classList.add("firstbtn", "add");
        Add2.innerText = "Add";

    
        let close2 = document.createElement("button");
        close2.classList.add("firstbtn");
        close2.innerText = "close";

       
            body.appendChild(pop2);
            pop2.appendChild(tittle3);
            pop2.appendChild(input3);
            pop2.appendChild(buttontogether)
            buttontogether.appendChild(Add2);
            buttontogether.appendChild(close2);
       
    
    
        // Add2  = document.getElementsByClassName("add")
        //////////*********** Add button */
         
           Add2.addEventListener("click", () => {              
                    const p = document.createElement("p");
                    p.classList.add("inline");
                    tittle2.innerText = input3.value;
                    pop2.style.display = "none";
                  //   pop2.remove();
                    var markdone = document.createElement("button");

                    card_items.appendChild(p);                         
                    console.log(card_items)

                  markdone.innerText = "Mark Done";
                  p.appendChild(tittle2);
                  p.appendChild(markdone);
                  markdone.classList.add("Mark_done");
    
    
              markdone.addEventListener("click", () => {
                Done();
              });
    
              function Done() {
                tittle2.style.textDecoration = "line-through";
                tittle2.style.color = "black";
                tittle2.style.fontWeight = "bolder";
                markdone.remove();
              }
            });
          
            //////////*********** close button */
            close2.addEventListener("click",()=>{
               pop2.style.display = "none"
             })

    }

    

   

    //////////****for deleting the card */

    delbtn.addEventListener("click",()=>{
      // console.log("deleting")
        delbtn.parentElement.remove();
    })


    ///////// for Accessing the single card ********************/////    
    /////////single card heading active********
    let back = document.createElement("button")
    back.innerHTML = "Back";
    back.setAttribute("id","back")
    back.classList.add("hide")
    body.appendChild(back)
    
    
    card_title.addEventListener("click",()=>{
        
        selectedcard = true;
        
        // addtask.style.display = "none";

        card_heading.style.visibility = "visible";
        card_heading.innerHTML = card_title.textContent;
        
        
        flex_container[0].style.visibility = "hidden";
        app.style.visibility = "hidden";
        
        back.style.visibility = "visible";
        create1.style.visibility = "visible";
        
        //  console.log(card_title)
        let card2 = card_container.cloneNode(true);
        create1.appendChild(card2);

        // card2.lastElementChild.addEventListener("click",()=>{
        //   card2.remove();
        // })

    })


////////////////////back button /*////////////////////////


    back.addEventListener("click",()=>{
      backbtn()
    })
    
function backbtn(){  
    flex_container[0].style.visibility = "visible";
    app.style.visibility = "visible";
    back.style.visibility = "hidden";
    create1.style.visibility = "hidden";
    card_heading.style.visibility = "hidden";

    create1.innerText="";

    selectedcard = false;

    // flex_container[0].appendChild(card_container);
    // console.log(flex_container[0].innerHTML)
}


    
}



////////////////first function ends **************////////////
/////////////////////////////////////////////////////////////


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

    
}











    

