let textInput = document.getElementById("textarea");
let form = document.querySelector("form");

form.addEventListener("submit", event =>
{
    event.preventDefault();
    console.log(textInput.value);
});