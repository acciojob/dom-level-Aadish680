//your JS code here. If required.
// Select the target element
const targetElement = document.getElementById("level");

// Initialize level count
let level = 0;
let currentElement = targetElement;

// Traverse up the DOM tree
while (currentElement) {
    level++;
    currentElement = currentElement.parentElement; // Move to the parent
}

// Display the level count
alert(`The level of the element is: ${level}`);
