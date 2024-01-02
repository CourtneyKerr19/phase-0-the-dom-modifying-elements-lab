// Write your code here! 

// Remove the 'main#main' DOM node
const main = document.querySelector('main#main');
main.remove();

// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = "Courtney is the champion";

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);