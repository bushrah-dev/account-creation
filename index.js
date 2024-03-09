let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")
let next = document.getElementById("next")
let back = document.getElementById("back")


next.onclick = function () {
    form1.style.left = "-450px"
    form2.style.left = "40px"
}
back.onclick = function () {
    form1.style.left = "40px"
    form2.style.left = "450px"

}

