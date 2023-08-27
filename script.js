
let first_popup = document.getElementById("first_popup");
let addOption = document.getElementById("add-option");
// let blurdiv = document.getElementById("blur");



// let id=0,id2=0,id3 = 0 ;
let card_container , textfield_value,app,
cardremove,span , flex_container
,back,single,addbtn;


////////////////first function start ************** ////////////
///////////////////////////////////////////////////////////////

function add(){

    hidepopup();

    let textfield = document.getElementById("textfield");
    textfield_value = textfield.value;
    // textfield.textContent = "";
    
    // single=document.getElementById("single");
    // single.style.visibility = "hidden";

    flex_container = document.getElementsByClassName("flex_container");
    
    //// card box //////
    
    card_container = document.createElement("div");
    card_container.classList.add("card_container");
    // card_container.setAttribute("id", id);
    // id++;
    

    let card_title  = document.createElement("h2");
    card_title.textContent = textfield_value;
    
    
    let horiz = document.createElement("hr");
    
    
    let card_items = document.createElement("div");
    // card_items.setAttribute("id",id2)
    // id2++;
    card_items.classList.add("card_items");
    // card_items.setAttribute("id",id3);
    // ++id3;

    

    // let list_items = document.createElement("p");
    // list_items.classList.add("list_items");


    span = document.createElement("span");
    // span.innerHTML = ""
    // list_items.innerHTML = textfield2;



    addbtn = document.createElement("button");
    addbtn.innerHTML = "➕";
    addbtn.classList.add("addbtn");
    
//    abc = addbtn.setAttribute("id",id2)
//     ++id2;
    
    
    let delbtn = document.createElement("button");
    delbtn.innerHTML ="🥡";
    delbtn.classList.add("delbtn");
//    delbtn.setAttribute("id", `card${id2}`);
    // id2++;
  

    // Appending the container div//
    // arr.appendChild(flex_container);

    flex_container[0].appendChild(card_container);
    card_container.appendChild(card_title);
    card_container.appendChild(horiz);
    card_container.appendChild(card_items);
    // card_items.appendChild(list_items);
    // list_items.appendChild(span);
    card_container.appendChild(addbtn);
    card_container.appendChild(delbtn);
    


    
    addbtn.addEventListener("click",()=>{
        // pop2.classList.remove("hide");
        
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
       // Add2.setAttribute("id",id3)
       //id3++;

    
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
                    // let itemadd = document.getElementById(`card${id2}`)
                    // card_items = document.getElementsByClassName("card_items");
                    // Add2 = document.getElementsByClassName("add");
                            
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
        
        delbtn.parentElement.remove();
        // console.log(card_remove);
    })


    ///////// for Accessing the single card ********************/////
   let card_heading = document.getElementById("card_heading");
    app = document.getElementById("app-container");
    back = document.getElementById("back");
    let create1 = document.getElementById("single");
    

    /////////single card heading active********


    card_title.addEventListener("click",()=>{

        let body = document.querySelector("body")      
        create1.classList.add("single");
        body.appendChild(create1)
        create1.appendChild(card_container);

        card_heading.innerHTML = textfield_value;
        card_heading.setAttribute("id","card_heading")
        card_heading.style.visibility = "visible";
        body.appendChild(card_heading)


        flex_container[0].style.visibility = "hidden";
        app.style.visibility = "hidden";

        back.style.visibility = "visible";
        create1.style.visibility = "visible";
        
       

    })

    
}



////////////////first function ends **************////////////
/////////////////////////////////////////////////////////////


function backbtn(){
    let create1 = document.getElementById("single");
    
    flex_container[0].style.visibility = "visible";
    app.style.visibility = "visible";
    back.style.visibility = "hidden";
    create1.style.visibility = "hidden";
    card_heading.style.visibility = "hidden";

    flex_container[0].appendChild(card_container);

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

    
}











    

