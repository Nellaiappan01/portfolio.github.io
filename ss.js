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

    const travelname = document.getElementById('travelname');
    const vechileno = document.getElementById('vechileno');
  
    // Define options for the second dropdown
    const options = {
        Annai: ['TN69 BK8538', 'TN54 BK9642', 'TN69 DJ0863'],
        Sakthi: ['TN69 BX3803', 'TN69 D2686', 'TN69 BB0000'],
    };
  
    // Function to populate the second dropdown
    function populateDropdown2() {
      const selectedValue = travelname.value;
      const optionsArray = options[selectedValue];
  
      // Clear existing options in the second dropdown
      vechileno.innerHTML = '<option disabled selected>VECHILE NO</option>';
  
      // Populate the second dropdown with new options
      if (optionsArray) {
        optionsArray.forEach(optionText => {
          const option = document.createElement('option');
          option.textContent = optionText;
          vechileno.appendChild(option);
        });
      }
    }
  
    // Event listener for dropdown1
    travelname.addEventListener('change', populateDropdown2);
  
    // Initialize the second dropdown based on the default selection
    populateDropdown2();
