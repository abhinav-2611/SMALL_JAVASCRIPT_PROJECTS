
const allButtons = document.querySelectorAll('.button');
console.log(allButtons);

const fullBody = document.querySelector('body');
const spn = document.createElement('span');
spn.setAttribute('class', 'button');
spn.setAttribute('id', 'red');
spn.style.backgroundColor = 'red';


const myDiv = document.querySelector('.allButton');
myDiv.appendChild(spn);

// Now update the allButtons list since a new button has been added
const updatedButtons = document.querySelectorAll('.button');

// Loop through all buttons and add event listeners
updatedButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // Set background color based on the button's ID
    fullBody.style.backgroundColor = button.id;
  });
});


const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => fullBody.style.backgroundColor = 'white');
