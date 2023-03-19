
const emailInput = document.getElementById("email");
const formElement = document.querySelector('.box-4 form');
const beforeElement = window.getComputedStyle(formElement, "::before");


formElement.addEventListener("submit", function (e) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailValue = emailInput.value.trim();
    if (regex.test(emailValue) !== true) {
        formElement.classList.add("invalid-email");
        e.preventDefault();
    }
});
