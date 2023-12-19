// Get the crnt date and time
const crntTime = new Date();
const crntYear = crntTime.getFullYear();
const crntMonth = crntTime.getMonth();
const crntDate = crntTime.getDate();

// Get user input elements
const inputDay = document.getElementById("iday");
const inputMonth = document.getElementById("imonth");
const inputYear = document.getElementById("iyear");

// const inputDay = document.getElementById("iday").value="1";
// const inputMonth = document.getElementById("imonth").value="10";
// const inputYear = document.getElementById("iyear").value="2003";

// Get output elements
const outputDay = document.querySelector("#o_day");
const outputMonth = document.querySelector("#o_month");
const outputYear = document.querySelector("#o_year");

// Function to calculate age
function calculateAge() {
    const enteredDay = parseInt(inputDay.value);
    const enteredMonth = parseInt(inputMonth.value);
    const enteredYear = parseInt(inputYear.value);


    if ((enteredDay <= 31) && (enteredMonth <= 12) && (enteredYear <= crntYear)) {
        const ageYear = crntYear - enteredYear;
        const ageMonth = crntMonth - enteredMonth;
        const ageDay = crntDate - enteredDay;
        outputYear.innerHTML = ageYear + "&nbsp;";
        outputMonth.innerHTML = ageMonth + "&nbsp;";
        outputDay.innerHTML = ageDay + "&nbsp;";

        }
    
    else {
        let labels = Array.from(document.querySelectorAll('.inputLabel'))
        for (let i = 0; i <= labels.length; i++) {
            labels[i].style.color = "red"
        }

        console.log("Invalid");
    }
}


// Styling
// outputYear.innerHTML = "19&nbsp;";
// outputMonth.innerHTML = "2&nbsp;";
// outputDay.innerHTML = "26&nbsp;";
outputYear.style.fontFamily = "Poppins800i";
outputMonth.style.fontFamily = "Poppins800i";
outputDay.style.fontFamily = "Poppins800i";


// [Optimized For Realtime Output] Attach event listeners to input elements
// inputDay.addEventListener("input", calculateAge);
// inputMonth.addEventListener("input", calculateAge);
// inputYear.addEventListener("input", calculateAge);

