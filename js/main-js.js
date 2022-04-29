window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 110)
})

function openNav () {
    var overlay = document.getElementById("myNav")
    overlay.classList.toggle('show')
    var overlayCont = document.querySelector("#menu-container")
    overlayCont.classList.toggle('show')
    var iconUP = document.getElementById("closeA")
    iconUP.classList.toggle('mostra')
    var iconDO = document.getElementById("closeB")
    iconDO.classList.toggle('showme')
    var oclose = document.querySelector("#close-x")
    oclose.classList.toggle('show')
    var userN = document.querySelector("#menu-list")
    userN.classList.toggle('hid')
    var closetxt = document.querySelector("#closeTXT")
    closetxt.classList.toggle('show')
    var closeMENU = document.querySelector("#menu-txt")
    closeMENU.classList.toggle('show')
    var gradMENU = document.querySelector("#gradTXT")
    gradMENU.classList.toggle('show')
}