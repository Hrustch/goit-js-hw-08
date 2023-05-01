import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("[name='email']");
const messageInput = document.querySelector("[name='message']");
let email;
let message;
const throttledSaving = throttle(()=>{
    email =  form.elements.email.value
    message = form.elements.message.value
    localStorage.setItem("feedback-form-state", JSON.stringify({email, message}));
}, 500)
form.addEventListener("input", throttledSaving)
form.addEventListener("submit", (event)=>{
    email =  form.elements.email.value
    message = form.elements.message.value
    event.preventDefault()
    console.log({email, message})
    localStorage.clear();
    form.reset();
    return;
})
const savedInfo = localStorage.getItem("feedback-form-state");
if(savedInfo){
    const {email, message} = JSON.parse(savedInfo)
    emailInput.value = email
    messageInput.value = message
}