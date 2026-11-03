const overlay = document.querySelector('.overlay');
const apriContatti = document.querySelector('#apri-contatti');
const chiusiContatti = document.querySelector('#chiusi-contatti');
const myForm = document.querySelector('form');
const submitForm = document.querySelector("#submit-form");

const dataForm = {
    name: "",
    email: "",
    contactReason:"",
    date: "",
    message: "",
    accepted: ""
};

apriContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "block";
});

chiusiContatti.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.style.display = "none";
});

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();

// })