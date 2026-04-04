 document.querySelector(".js-generate-button").addEventListener('click',() => {generateJoke();}
  ); //button is clicked and it runs the generateJoke funtion.

  
 //boolean value and classList to change the CSS
let iscobalt = true;

 document.querySelector(".js-generate-button").addEventListener
 ('click',() => {

  //
  if (iscobalt){document.body.classList.add("after-button-clicked");
    console.log("changed to pink");
    iscobalt = false;} 
   /* revert boelean back to true to ensure conditions are met on second branch*/


   //removes class and colour changes back to "before-button-clicked"
    else {document.body.classList.remove("after-button-clicked");
    console.log("changed to cobalt"); 
    iscobalt = true; 
    } 
    /* revert boelean back to true to ensure conditions can be meant on the first branch*/


    //used console.log to see if the branches are changing the css to the right colour

 }); 


let storage = []; //Array to store remaining jokes

 
//function to generate jokes

function generateJoke(){

  if (storage.length === 0){
   for (let i = 0; i < myArray.length; i++){storage.push(myArray[i]); }

    //using if statement if storage array is empty.
    //if the array is empty then we push the items in myArray back into the storage array. 
  }
  
  
   let randonNum = Math.floor(Math.random() * storage.length);

let pickAJoke = storage[randonNum];

  storage[randonNum] = storage[storage.length -1]; 
  storage.pop();

   
   document.querySelector(".js-joke-p").innerHTML= pickAJoke;
   //shows the joke on the page using the "p" tag in HTML file
  console.log(pickAJoke);
  

}

