// 1st Exercise: Button Click Alert
let button1 = document.getElementById("btnClick");
button1.addEventListener("click", function() {
    alert("Button Clicked!");
});

// 2nd Exercise: Change Text Content
let paragraphTxt = document.getElementById("paragraphText");
let changeTextBtn = document.getElementById("changeTextBtn");
changeTextBtn.addEventListener("click", function() {
    paragraphTxt.textContent = "Welcome to JavaScript Event Handling!";
});

// 3rd Exercise: Change Background Color
let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById("greenBtn");
let blueBtn = document.getElementById("blueBtn");
redBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});
greenBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
});
blueBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});

// 4th Exercise: Double Click Event
let doubleClickBtn = document.getElementById("doubleBox");
let doubleMessage = document.getElementById("doubleMessage");
doubleClickBtn.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "yellow";
    doubleMessage.textContent = "Box double-clicked!";
});

// 5th Exercise: Key Press Detection
let keyInput = document.getElementById("keyInput");
let keyMessage = document.getElementById("keyOutput");
keyInput.addEventListener("keydown", function(event) {
    keyMessage.textContent = "You pressed: " + event.key;
});

// 6th Exercise: Character Count
let charText = document.getElementById("charText");
let charCount = document.getElementById("charCount");
charText.addEventListener("input", function() {    
    charCount.textContent = "Character Count: " + charText.value.length;
});

// 7th Exercise: Form Submission
let simpleForm = document.getElementById("simpleForm");
let formMessage = document.getElementById("formMessage");
simpleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formMessage.textContent = "Form Submitted Successfully!";
    console.log("Form Submitted Successfully");
});

// 8th Exercise: Form Validation
let validationForm = document.getElementById("validationForm");
let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");
let validationMessage = document.getElementById("validationMessage");

validationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = nameInput.value.trim();
    let password = passwordInput.value;
    let errors = [];
    if (name === "") {
        errors.push("Name field cannot be empty.");
    }
    if (password.length < 6) {
        errors.push("Password must contain at least 6 characters.");
    }
    if (errors.length > 0) {
        validationMessage.textContent = errors.join(" ");
        validationMessage.style.color = "red";
    } else {
        validationMessage.textContent = "Form submitted successfully!";
        validationMessage.style.color = "green";
        console.log("Form submitted successfully");
    }
});

// 9th Exercise: Focus and Blur Events
let focusInput = document.getElementById("focusInput");
focusInput.addEventListener("focus", function() {
    focusInput.style.border = "5px solid rgb(247, 8, 8)";
});

focusInput.addEventListener("blur", function() {
    focusInput.style.borderColor = "";
});

// 10th Exercise: Mouseover and Mouseout Events
let hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "lightPink";
    hoverBox.style.transform = "scale(1.2)";
});
hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = "";
    hoverBox.style.transform = "";
});

// 11th Exercise: Mouse Position Tracking
let mousePosition = document.getElementById("mousePosition");
document.addEventListener("mousemove", function(event) {
    mousePosition.textContent = "X: " + event.clientX + " | Y: " + event.clientY;
});

// 12th & 13th Exercise: Event Propagation and stopPropagation()
let parentDiv = document.getElementById("parentDiv");
let childBtn = document.getElementById("childBtn");

parentDiv.addEventListener("click", function() {
    alert("Parent Div Clicked!");
});

childBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    alert("Child Button Clicked!");
});

// 14th Exercise: Dynamic List Creation and Click Event
let itemList = document.getElementById("itemList");
let clickedItem = document.getElementById("clickedItem");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    itemList.appendChild(li);
}
itemList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        clickedItem.textContent = "Clicked Item: " + event.target.textContent;
        clickedItem.style.color = "blue";
        clickedItem.style.fontWeight = "bold";
    }
});

// 15th Exercise: Image Slider
let imgSlider = document.getElementById("slider");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let images = [
    "https://picsum.photos/id/237/400/300",
    "https://picsum.photos/id/238/400/300",
    "https://picsum.photos/id/239/400/300",
    "https://picsum.photos/id/240/400/300",
    "https://picsum.photos/id/241/400/300"
];
let currentIndex = 0;
function showImage(index) {
    imgSlider.src = images[index];
}
prevBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});
nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

// 16th Exercise: Dark Mode Toggle
let darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", function() {
    if(document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        darkModeBtn.textContent = "Switch to Dark Mode";
    } else {
        document.body.classList.add("dark-mode");
        darkModeBtn.textContent = "Switch to Light Mode";
    }
    console.log("Dark mode toggled");
});

// 17th Exercise: Simple Calculator
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
let resultDisplay = document.getElementById("result");

function performOperation(operation) {
    let number1 = parseFloat(num1.value);
    let number2 = parseFloat(num2.value);
    let result;
    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = "Please enter valid numbers.";
        return;
    }
    switch (operation) {
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            if (number2 === 0) {
                resultDisplay.textContent = "Error: Division by zero is not allowed.";
                return;
            }
            result = number1 / number2;
            break;
    }
    resultDisplay.textContent = "Result: " + result;
}

addBtn.addEventListener("click", function() {
    performOperation("add");
});
subBtn.addEventListener("click", function() {
    performOperation("subtract");
});
mulBtn.addEventListener("click", function() {
    performOperation("multiply");
});
divBtn.addEventListener("click", function() {
    performOperation("divide");
});
