const containerEl = document.querySelector(".container");

//Create 30 divs with class name color-container
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

//Select all the 30 divs
const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();//Function call

//For each div element, call randomColor() and change its style and text
//Colorcode must begin with => #
function generateColors(){
    colorContainerEls.forEach((colorContainerEl) =>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = '#' + newColorCode;
        colorContainerEl.innerText = '#' + newColorCode;
    });
}


//Get all digits and alphabets used to generate color, length of code must be 6
//String must be empty => ""
//Repeat the process 6 times to get a 6 length code
//Generate a number between 0 - 16 and get the element at the index of randomNumber
//Add it to colorCode
//Return the whole colorCode
function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum, randomNum+1);
    }
    return colorCode;
}