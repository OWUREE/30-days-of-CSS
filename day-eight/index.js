const toggle = document.getElementById("nav-links");
const label = document.getElementById("checked");
label.addEventListener('click',() =>{
    console.log(toggle);
    toggle.classList.toggle("nav-toggle")
} )