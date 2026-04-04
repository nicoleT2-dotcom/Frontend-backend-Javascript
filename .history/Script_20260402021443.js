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


 


 function generateJoke(amount, output){
  //none reapeating numbers 
  //add a few more jokes 
let jokecount =[];


  for (let i = 1; i <= amount; i++ ){
    jokecount.push(i)

  }

  let result = [];

  for (let i = 1; i <= theOutput; i++)
    
  const pickAJoke = Math.floor(Math.random()* (amount - i));
  result.push(jokecount [pickAJoke]);
  jokecount[pickAJoke] = jokecount[amount - i]}

  return result;



  document.querySelector(".js-joke-p").innerHTML= myArray[pickAJoke];
  console.log(pickAJoke);
 };
