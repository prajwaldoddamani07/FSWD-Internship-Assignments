const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if(name.trim() === ""){
        message.innerText = "Name is required!";
    }else{
        message.innerText = "Form Submitted Successfully!";
    }
});