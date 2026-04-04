<h2>question 2 answers</h2>


 **`unshift()`** is an array method used to add new items at the begining of an array. For example:

`const cFGDegree = ["Software and Data Engineering", "Data Science"];`
`cFGDegree.unshift = ("Full-Stack Development","Product Management");`

The new arrray would look like this:

`cFGDegree = ["Full-Stack Development", "Product Management", "Software and Data Engineering", "Data Science"];`

 With the new items Full-Stack Development and Product Management added at the begining of the array taking position `[0]` and`[1]`. respectively.




 **`shift()`** is an array method used to remove items at the begining of an array. For example:

`cFGDegree = ["Full-Stack Development", "Product Management", "Software and Data Engineering", "Data Science"];`
`cFGDegree.shift = ("Full-Stack Development","Product Management");`

The new arrray would look like this:
`const cFGDegree = ["Software and Data Engineering", "Data Science"];`

With items Full-Stack Development and Product Management removed from the array Software and Data Engineering and Data Science are the only items left in the array.



**`split()`** is a method that works on strings by spliting the string into parts based on the separator you give it e.g. spaces in between words or commas. This method doesn't change the original string. The `split()` method creates a new array where each part then becomes an item in the array. 


For example the original string: 
`const cFGDegree = "Has a Full-Stack Development stream"` 

`const word = cFGDegree.split(" ");` 
**`split()`** splits the string into parts where there are spaces. 

`const fistWord = word[0];` //
`[0]` give the method the position of the item we want. 

`console.log(firstWord);` //

The console would then log the word "Has"





**Object methods**

Object Methods: are functions that are stored inside an object as part of the object's propety values.

An example of an object and it's object methods:

`const programmingLanguages = {name: "JavaScript", creator:"Brendan Eich", giveName: function(){return this.name;}};`

In this example we created a function inside the object and named it giveName and used a return statement to return the value stored under the key name.



**`onmouseover`** is an event that is triggered whenever the mouse/pointer hovers over an element it's attached to on a webpage. 
example of code:
`<button onmouseover="colourChange()"></button>`


**`onclcick`** is an event that is triggered whenever the specific HTML element it's attached to is clicked.

example of code using JavaScript in HTML to carry out a function when the button is clicked:
`<button onclick="colourChange()">Click this button</button>`


**`onpaste`** is an event that is triggered whenever the user pastes content into the element it's attached to. The element has to be able to be edited like the input element and it's input field. 

example of code using JavaScript in HTML to carry out a function when the user inputs content:
`<input type="text" onpaste="colourChange()" placeholder="Enter here" >` 





















