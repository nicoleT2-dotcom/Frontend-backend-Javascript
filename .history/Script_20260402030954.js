 document.querySelector(".js-generate-button").addEventListener('click',() => {generateJoke();}
  ); //button is clicked and it runs  the generateJoke funtion.

  

let iscobalt = true; 

 document.querySelector(".js-generate-button").addEventListener
 ('click',() => {

  if (iscobalt){document.body.classList.add("after-button-clicked");
    console.log("changed to pink");
    iscobalt = false;} 
   
    else {document.body.classList.remove("after-button-clicked");
    console.log("changed to cobalt"); 
    iscobalt = true;}
  

 }); 


 
let storage = [];
 function generateJoke(){

  let pickAJoke;
  
  for (let i = 0; i < myArray.length; i++) {
   pickAJoke= Math.floor(Math.random()*(myArray.length));
   
   document.querySelector(".js-joke-p").innerHTML= myArray[pickAJoke];
  console.log(pickAJoke);

  myArray.splice(pickAJoke, 1);
  }


  


 };
