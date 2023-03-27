

// var jay = document.getElementById('jay');
// // jay.textContent = 'jay';
// // jay.innerText = "hiii"
// // jay.style.color = 'red';
// console.log(jay);
function getclintdata(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var message = document.getElementById("message").value;
// console.log(name);
 var responce = document.getElementById('responce');
 responce.innerText = "thank you " + name + " we hope you be satisfied with us";
 responce.style.paddingTop = '16vh';
 responce.style.fontSize = '10vh';
 responce.classList.add("vh-60",)


 var form = document.getElementById('form');
 form.style.display = 'none';
}

function changenav(){
var scroll = window.scrollY;
var navbar = document.getElementById('navbar');
    if (scroll < 150){

        navbar.classList.remove('navafterscroll');
    }
    else{

        navbar.classList.add('navafterscroll');
    }
}
window.addEventListener('scroll',changenav);