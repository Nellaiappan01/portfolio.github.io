var km = document.querySelector(".km")
var trip = document.querySelector(".trip")
var kmvisble = document.querySelector('.kmclick')
var tripvisble = document.querySelector('.tripclick')

km.addEventListener('click',kmchange)


function kmchange(){
    kmvisble.style.display = "block"
    tripvisble.style.display = "none"
}
trip.addEventListener('click',tripchange)
function tripchange(){
    tripvisble.style.display = "block"
    kmvisble.style.display = "none"

   
}
