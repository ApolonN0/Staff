const body=document.querySelector("body")
const header__item=document.querySelectorAll(".header__link")

function dark(){
    console.log("тьма")
    body.style.background="#693800"
    body.style.color="white"
    header__item.forEach(element => {
        element.style.color="white"
    });
    
}
function light() {
    console.log("свет")
    body.style.background="#ffc27c"
    header__item.forEach(element => {
        element.style.color="black"
    });
    body.style.color="black"
}