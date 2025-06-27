// index.js

// Remove the main#main element
const main = document.getElementById('main');
main.remove();

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the h1's id to 'victory'
newHeader.id = 'victory';

// Set the h1's text content
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

// Append the h1 to the body
document.body.appendChild(newHeader);