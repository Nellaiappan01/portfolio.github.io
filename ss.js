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
      RAJ : ['TN76 K 3143','TN69 M 8353','TN72 BY 4290','TN37 BH 8646','TN37 CX 0149'],

      SABAPATHY : ['TN75 D 0741','TN69 AJ 4307'],
      
      BASKAR :[ 'TN59 AL 6432'],
      
      MUTHAIAH :[  'TN69 AC 9513'],
      
      MARY :[ 'TN69 M 1677','TN69 AQ 1015'],
      
      ESHWARI :['TN69 BA 5922', 'TN34 X 9902', 'TN21 BZ 8215'],
      
      KAJENDRAN :['TN72 BF 7998'],

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

   
    var dropdownElementvechileno = document.querySelector(".vechileno");

    // Get the text box element using its Class
    var textBoxElementvechileno = document.getElementById('vechiletype')
    
    // Attach an event listener to the dropdown list
    dropdownElementvechileno.addEventListener("change", function() {
        // Get the selected option's label
        var selectedLabelvechileno = dropdownElementvechileno.options[dropdownElementvechileno.selectedIndex].text;
    
        // Populate the value of the text box with the selected option's label
        textBoxElementvechileno.value = selectedLabelvechileno;
    });

    const labelsvechiletype = {
      // RAJ TRAVELS
      'TN76 K 3143' : 'Magic',
      'TN69 M 8353' : 'Magic',
      'TN72 BY 4290': 'Magic',
      'TN37 BH 8646': 'Magic',
      'TN37 CX 0149': 'Magic',

      // SABAPATHY TRAVELS
       'TN75 D 0741': 'AUTO',
       'TN69 AJ 4307':'AUTO',
       

      // BASKAR TRAVELS
       'TN59 AL 6432':'Magic',

      // MUTHAIAH TRAVELS
       'TN69 AC 9513':'Magic',

      // MARY TRAVELS
       'TN69 M 1677':'AUTO',
       'TN69 AQ 1015':'AUTO',
      
      // ESHWARI TRAVELS
       'TN69 BA 5922': 'Magic',
       'TN34 X 9902': 'Magic',
       'TN21 BZ 8215': 'Magic',
    
      // KAJENDRAN TRAVELS
       'TN72 BF 7998': 'Magic',
      };

      const inputField = document.getElementById('vechiletype');
      const selectedLabelInputvechileno = document.getElementById('selectedLabelInputvechileno');
      
      function updateInputValuevechiletype() {
        const vechileno = document.getElementById('vechileno');
        const selectedOption = vechileno.options[vechileno.selectedIndex];
  
        if (selectedOption) {
          const selectedValue = selectedOption.value;
          inputField.value = selectedValue;
          updateLabel(selectedValue);
        }
      }
  
      function updateLabel(selectedValue) {
        const labelOutputvechiletype = document.getElementById('selectedLabelvechiletype');
        if (labelsvechiletype[selectedValue]) {
          labelOutputvechiletype.textContent = labelsvechiletype[selectedValue];
          // Update the new input field with the selected label
          selectedLabelInputvechileno.value = labelsvechiletype[selectedValue];
        } else {
          labelOutputvechiletype.textContent = 'Entry';
          // Clear the new input field if the selected label is not found
          selectedLabelInputvechileno.value = '';
        }
      }
      // Initialize the input field and label
      updateInputValuevechiletype();
  
      
    // entry manualEntryInput
    function travelnamecheckManualEntry(selectedValue) {
      const travelnamemanualEntry =document.querySelector('.partyname');
        const travelnameoptionmanualEntryInput = document.getElementById('vechiletypeMaual');

      if (selectedValue === 'travelname') {
        travelnamemanualEntry.style.display = 'none';
        travelnameoptionmanualEntryInput.style.display = 'block';
        travelnamemanualEntry.value = '';
      } else {
        travelnamemanualEntry.style.display = 'none';
        travelnamemanualEntry.style.display = 'block';
      }
    }
    
    function blockcheckManualEntry(selectedValue) {
      const blocknamemanualEntry =document.getElementById('block');
        const blocktypeMaual = document.getElementById('blocktypeMaual');
       

      if (selectedValue === 'block') {
        blocktypeMaual.style.display = 'block';
        blocktypeMaual.value = '';
        blocknamemanualEntry.style.display = 'none';
      } else {
        blocknamemanualEntry.style.display = 'block';
        vechilenotypeMaual.style.display = 'none';
      }
    }
    const fromm =document.querySelector('.fromcheck')
    const frominput =document.getElementById('frominput')
    fromm.addEventListener('change',function() {
        var selectedfromm = fromm.options[fromm.selectedIndex].text;
        frominput.value = selectedfromm;
        
    });
    

    function fromcheckManualEntry(selectedValue) {
      const fromm =document.getElementById('fromm')
      const fromtohide =document.getElementById('fromtohide')
      const too =document.getElementById('too')
      

      if (selectedValue === 'fromempty') {
        fromm.style.display = 'none';
        too.style.display = 'none';
        fromtohide.style.display = 'flex';
        fromtohide.value = '';
      } else {
        fromm.style.display = 'block';
        too.style.display = 'block';
      }
    }
    
    const vechilelabel = document.getElementById('icon')
    
    vechilelabel.addEventListener('click',vechilenumedit)
    function vechilenumedit(){
      const vechilelabelnumber = document.getElementById('selectedLabelvechiletype')
      const vechilelabelno = document.getElementById('vechileno')
      const vechilelabevisble = document.getElementById('vechilelabevisble')
      const icon = document.getElementById('icon')

      vechilelabelnumber.style.display = 'none';
      vechilelabelno.style.display = 'none';
      icon.style.display = 'none';
      vechilelabevisble.style.display = 'flex';


    }
   
// link googlsheet 
   

         
       
let url ='https://script.google.com/macros/s/AKfycby5FMcHe_4ieQMnY_2AGXnmjkk1erYvP0W-iq0Cc6685JN4l33VoimjdUmSDSl5gVC1/exec';
let form=document.querySelector('#form');
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Submitting.....";
    let d =new FormData(form);
    fetch(url,{method:"POST",
        body:d
    }).then((res)=>res.text())
    .then((finalRes)=>{
        e.target.btn.innerHTML="Submit";
        document.getElementById("res").innerHTML=finalRes;
        form.reset();
         setTimeout(()=>{
            document.getElementById("res").innerHTML=""; 
         },3000)        
    })
    e.preventDefault();
})


// DATE FORMAT

function formatDate() {
  const inputDate = document.getElementById("date").value;
  const formattedDate = formatInputDate(inputDate);
  document.getElementById("formattedDate").value = formattedDate;
}

function formatInputDate(inputDate) {
  const [year, month, day] = inputDate.split('-');
  return `${day}-${month}-${year}`;
}


var too = document.getElementById("too");
var toinput = document.getElementById("to");
too.addEventListener("change", function() {
    var selectedtoo = too.options[too.selectedIndex].text;
    toinput.value = selectedtoo;
});

var partyname = document.querySelector('.partyname')
var partynameinput = document.querySelector('.partynameinput')
partyname.addEventListener("change", function() {
    var selectedpartyname = partyname.options[partyname.selectedIndex].text;
    partynameinput.value = selectedpartyname;
});

var blockcheck = document.querySelector('.blockcheck')
var blockinput = document.querySelector('.blockinput')
blockcheck.addEventListener("change", function() {
    var selectedblockcheck = blockcheck.options[blockcheck.selectedIndex].text;
    blockinput.value = selectedblockcheck;
});
const refreshLink = document.querySelector('.refresh')
refreshLink.addEventListener('click', function () {
    // Reload the page
    location.reload();
});
