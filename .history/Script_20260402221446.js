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


 console.log(my)

let storage = [];

 function generateJoke(){

  if (storage.length === 0){
   for (let i = 0; i < myArray.length; i++){storage.push(myArray[i]); }
    

  }

   let randonNum = Math.floor(Math.random() * storage.length);

let pickAJoke = storage[randonNum];

  storage[randonNum] = storage[storage.length -1]; 
  storage.pop();

   
   document.querySelector(".js-joke-p").innerHTML= pickAJoke;
  console.log(pickAJoke);

}

