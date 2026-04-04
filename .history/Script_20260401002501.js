 document.querySelector(".js-generate-button").addEventListener('click',() => {generateJoke()}
  );


 document.querySelector(".js-generate-button").addEventListener
 ('click',() => {document.body.style.backgroundColor = "rgb(255, 99, 245"}); //when button is clicked the backgroung colour of the body changes.

  



 function generateJoke(){


  let pickAJoke = Math.floor(Math.random()*(myArray.length));

  document.querySelector(".js-joke-p").innerHTML= myArray[pickAJoke];
  console.log(pickAJoke);
  

  //need to make sure jokes aren't repeated

 // create while loop 
 //boolean
 //if statement that says if it's been shown, show  another

 

 };
