 document.querySelector(".js-generate-button").addEventListener('click',() => {generateJoke()}
  ); //button is clicked and it runs  the generateJoke funtion.

  




function colourChange(){ let isPink = true; 


 document.querySelector(".js-generate-button").addEventListener
 ('click',() => {

  if (isPink){document.body.classList.add("after-button-clicked")} else{document.body.classList.remove("after-button-clicked")}; 
  console.log("did it work?")
 }); }



  


  



 function generateJoke(){


  let num = [];

  let pickAJoke = Math.floor(Math.random()*(myArray.length));

  document.querySelector(".js-joke-p").innerHTML= myArray[pickAJoke];
  console.log(pickAJoke);
  

  //need to make sure jokes aren't repeated

 // create while loop 
 //boolean
 //if statement that says if it's been shown, show  another

 

 };
