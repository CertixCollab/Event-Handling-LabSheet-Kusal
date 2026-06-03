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
