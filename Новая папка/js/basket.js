
let gds_item = document.createElement("li")
let gds_name = document.createElement("h1")
let gds_pic = document.createElement("img")
let gds_remove = document.createElement("button")
let gds_title = document.createTextNode("Tayga 6436")
let gds_btn_txt = document.createTextNode("Удалить из корзины")
gds_remove.appendChild(gds_btn_txt)
gds_pic.src = "img/tayga36.jpg"
gds_name.appendChild(gds_title)
gds_remove.setAttribute("onClick","del()")
gds_remove.classList.add("gds_remove_btn")
gds_item.classList.add("gds_item")
const gds_spawn = document.querySelector(".gds_list")
let item_1 = document.querySelectorAll(".gds_item")[0]
function spawner() {
    gds_spawn.appendChild(gds_item)
    gds_item.appendChild(gds_name)
    gds_item.appendChild(gds_pic)
    gds_item.appendChild(gds_remove)
    item_1.classList.add("basket_hide")
}

function del() {
    gds_remove.parentNode.remove();
    item_1.classList.remove("basket_hide")
}