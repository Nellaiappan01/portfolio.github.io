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
 const week2Radio = document.getElementById('week2');
    const month2Radio = document.getElementById('month2');
    
    week2Radio.addEventListener('change', RadiocolorChange);
    month2Radio.addEventListener('change', RadiocolorChange);
    
    function RadiocolorChange() {
      if (week2Radio.checked) {
        // Handle the "week2" radio button selected
        document.body.style.backgroundColor = 'lightblue';
      } else if (month2Radio.checked) {
        // Handle the "month2" radio button selected
        document.body.style.backgroundColor = 'lightgreen';
      }
    }
