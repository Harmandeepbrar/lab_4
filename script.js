const form= document.getElementById("eventRegistrationForm");


form.addEventListener("submit", (event)=> {
    event.preventDefault();


    const errorMessages = document.querySelectorAll(".errormessage");
    errorMessages.forEach(error => {
        error.remove()
    })

    console.log("Tickets are submitted")



    if (validationForm()){
        console.log("Form validated")
    }else{
        console.log("Form validation failed.")
    }
});


function validationForm(){
    let isValid = true


    const ticketsBought = document.getElementById("ticket");
    if (ticketsBought.value === "" && ticketsBought.value <= 0) {

        console.error("Invalid ticket number");

        showInputError(
            ticketsBought, 
            "Please buy valid number of tickets."
        );


        isValid = false;
    }



    const nameInput = document.getElementById("name");

    if (nameInput.value === "") {

        console.error("Name section cant be empty");

        showInputError(
            nameInput, "Name section cant be empty."
        );


        isValid = false;
    }


    const emailInput = document.getElementById("email");

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailPattern.test(emailInput.value)) {

        console.error("Invalid email");

        showInputError(
            emailInput,
            "Please enter a valid email."
        );

        isValid = false;
    }

    const typeofMatch = document.getElementById("typeofMatch");

    if (typeofMatch.value === "") {

        console.error("Match type is missing");

        showInputError(
            typeofMatch, 
            "Please select a match type.");
        isValid = false;
    }

    return isValid
}



function showInputError(inputElement, message){
    const container = inputElement.closest(".input-container");


    const errorDisplay = document.createElement("span");
    errorDisplay.innerHTML = message;
    errorDisplay.className = "errormessage";


    inputElement.parentElement.appendChild(errorDisplay);
}

function escapeHTML(input){
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}