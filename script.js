
let first_popup = document.getElementById("first_popup");
let addOption = document.getElementById("add-option");
let create1 = document.getElementById("single");
let body = document.querySelector("body")      
let flex_container = document.getElementsByClassName("flex_container");
let card_heading = document.getElementById("card_heading");
let app = document.getElementById("app-container");
let back = document.getElementById("back");
let addtask = document.getElementById("plus");
let noItem = document.getElementById("noItem");


let selectedcard = false;


let textfield_value,cardremove,single;


////////////////first function start ************** ////////////
///////////////////////////////////////////////////////////////

function add(){
  
  hidepopup();

  //  if(selectedcard)
  // {
  //   backbtn()
  //   selectedcard = false;
  // }
 
  let textfield = document.getElementById("textfield");
  textfield_value = textfield.value;
  textfield.value = "";

  
  addtask.style.visibility = "visible";

  noItem.classList.add('hide')
    
    //// card box ///////////////////////////////////////////////////////
    
   let card_container = document.createElement("div");
    card_container.classList.add("card_container");
   
    

    let card_title  = document.createElement("h2");
    card_title.textContent = textfield_value;
    
    
    let horiz = document.createElement("hr");
    
    
    let card_items = document.createElement("div");
    card_items.classList.add("card_items");
    


   let addbtn = document.createElement("button");
    addbtn.innerHTML = "➕";
    addbtn.classList.add("addbtn");
    

    
    let delbtn = document.createElement("button");
    delbtn.innerHTML ="🥡";
    delbtn.classList.add("delbtn");
///////////////////////////////////////////////////////////////////////////////
  

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
        // card_items.appendChild(tittle2);

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
       
    
    
        //////////*********** Add button */
         

          Add2.addEventListener("click", () => {              
                    AddItem(card_items,input3,pop2)
            });

            
        //////////*********** close button */

            close2.addEventListener("click",()=>{
              pop2.style.display = "none"
            })
          

    }
    
    function AddItem(item,input3,pop2)
    {
      

      const p = document.createElement("div");
      let text=document.createElement('span')
            p.classList.add("inline");
            text.innerText = input3.value;
            pop2.remove()
            
            var markdone = document.createElement("button");
            markdone.innerText = "Mark Done";

            markdone.addEventListener("click", () => {
              Done();
            });


            p.appendChild(text);
            p.appendChild(markdone);
            markdone.classList.add("Mark_done");
           
            // console.log(item)
            if(selectedcard)
            {
              var cloneitem = p.cloneNode(true)
                card_items.appendChild(cloneitem)
            }                     
            item.appendChild(p);    
            // console.log(card_items)

      function Done() {
        text.style.textDecoration = "line-through";
        text.style.color = "black";
        text.style.fontWeight = "bolder";
        markdone.remove();

        if(selectedcard)
        {
          cloneitem.firstElementChild.style.textDecoration = "line-through";
          cloneitem.firstElementChild.style.color = "black";
          cloneitem.firstElementChild.style.fontWeight = "bolder";
          cloneitem.firstElementChild.nextSibling.remove()
        }      
      }  
    }
  
    
    //////////****for deleting the card */
    
    delbtn.addEventListener("click",()=>{
      // console.log("deleting")
      delbtn.parentElement.remove();
      
      let abc = flex_container.innerHTML===""
      if(abc===false)
        noItem.classList.remove('hide');
      
      console.log(flex_container.innerHTML === '')
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
        // addtask.style.visibility = "hidden";
      

        card_heading.style.visibility = "visible";
        card_heading.innerHTML = card_title.textContent;
        
        
        flex_container[0].style.visibility = "hidden";
        app.style.visibility = "hidden";
        
        back.style.visibility = "visible";
        create1.style.visibility = "visible";
        
        //  console.log(card_title)
        let card2 = card_container.cloneNode(true);
        create1.appendChild(card2);

        card2.lastElementChild.addEventListener("click",()=>{
          card2.remove();
          card_container.remove();
        })

        card2.lastElementChild.previousSibling.addEventListener("click", () => {              
            createitem(card2.lastElementChild.previousSibling.previousSibling);
            // console.log(card2.lastElementChild.previousSibling.previousSibling)
        });

    })


////////////////////back button /*////////////////////////

back.addEventListener("click",()=>{
  backbtn(back)
})

function backbtn(back){  
  flex_container[0].style.visibility = "visible";
  app.style.visibility = "visible";
  back.style.visibility = "hidden";
  create1.style.visibility = "hidden";
  card_heading.style.visibility = "hidden";
  
  create1.innerText="";
  selectedcard = false;
  
  }

}

////////////////first function ends **************////////////
/////////////////////////////////////////////////////////////


let blur = document.getElementById("blur");
addOption.addEventListener("click",()=>{
    first_popup.classList.remove("hide");
    blur.style.filter = "blur(3px)";
    // flex_container.style.filter = "blur(3px)";
})

function hidepopup(){
    first_popup.classList.add("hide");
    blur.style.filter = "blur(0px)";
    textfield_value = "";
    
}
 
