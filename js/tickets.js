// booking tickets
// multiple pages- step by step

var currentTab = 0; // the first tab(0)

showTab(currentTab); // show the current tab

function showTab(n) {
    // show the specific tab
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";


    if (n == 0) {
        // set the Prev buttons
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }


    if (n == (x.length - 1)) {
        // set the Next buttons
        document.getElementById("nextBtn").innerHTML = "Submit"; //action of the last tab 
    } else {
        document.getElementById("nextBtn").innerHTML = `<i class="fa-solid fa-angle-right"></i>`; // others should keep on the steps
    }

    fixStepIndicator(n)  // show the correct step indicator

}


function nextPrev(n) {
    // figure out which tab to show
    var x = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;   // exit the function if any field in the current tab is invalid

    x[currentTab].style.display = "none";  // the current tab be hidden
    currentTab = currentTab + n; // the current tab -/+ 1

    if (currentTab >= x.length) {
        //when reached the last tab, submit!
        document.getElementById("mulForm").submit();

        alert("Booking successfully! Thank you for your order!");

        return false;
    }

    showTab(currentTab); // not the last one, show the current tab
}

function validateForm() {
    // ↑ check the validation of the form field
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    // set a loop to check every input in the tab
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {  // if the content in the input is nothing
            y[i].className += " invalid";

            valid = false; // set the current valid status to false
        }
    }

    // ↓ if the valid status is true, mark the step as finished and valid
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status 
}

function fixStepIndicator(n) {
    // to remove the "active" class of all steps
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    // then add the "active" class th the current step
    x[n].className += " active";
}


//-------------------------------------------------------------------------------

// multiple page - tab - 2
// different types of tickets

function increaseQuantity(ticketType) {
    var quantityInput = document.getElementById("quantity-" + ticketType);
    quantityInput.value = parseInt(quantityInput.value) + 1;
    calculateTotal();
}

function decreaseQuantity(ticketType) {
    var quantityInput = document.getElementById("quantity-" + ticketType);
    if (quantityInput.value > 0) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        calculateTotal();
    }
}

function calculateTotal() {
    var totalPrice = 0;
    var quantities = document.querySelectorAll('input[type="number"]');

    for (var i = 0; i < quantities.length; i++) {
        var ticketType = quantities[i].id.split("-")[1];
        var quantity = parseInt(quantities[i].value);

        var price;
        switch (ticketType) {
            case "1":
                price = 80;
                break;
            case "2":
                price = 75;
                break;
            case "3":
                price = 0;
                break;
            case "4":
                price = 65;
                break;
            default:
                price = 0;
                break;
        }

        totalPrice += price * quantity;
    }

    document.getElementById("total-price").textContent = totalPrice;
}


// FAQ 開合

const question = document.querySelectorAll('.faq_item');

question.forEach(function (question) { //pick up all the .question
    const btn = question.querySelector('.switch_btn'); // finding minus/plus icon

    btn.addEventListener('click', function () {

        question.classList.toggle('show_answer');

        question.forEach(function (item) {

            if (item !== question) {

                item.classList.remove('show_answer');
            }
        });

    });
});