
// function-1: 

function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const previousPhoneNumber = parseInt(phoneNumberField.value);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

// function-2:
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1000;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click', function(){

    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

    // function-4: calculate total:
    // const currentPhoneTotal = getTextElementValueById('phone-total');
    // const currentCaseTotal = getTextElementValueById('case-total');
    // const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;


    // function-3: priceUpdate
    // const phoneTotalElement = document.getElementById(elementId);
    // const currentPhoneTotal = parseFloat(phoneTotalElement.innerText);
    // return currentPhoneTotal;


    // function-2: priceUpdate ++
    // const phoneTotalPrice = newPhoneNumber * 1000;
    // const phoneTotalElement = document.getElementById('phone-total');
    // phoneTotalElement.innerText = phoneTotalPrice;


    // function-1: phoneUpdate ++
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const previousPhoneNumber = parseInt(phoneNumberField.value);
    // const newPhoneNumber = previousPhoneNumber + 1;
    // phoneNumberField.value = newPhoneNumber;
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){

    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

    // function-3: priceUpdate
    // const phoneTotalElement = document.getElementById(elementId);
    // const currentPhoneTotal = parseFloat(phoneTotalElement.innerText);
    // return currentPhoneTotal;

    // function-2: priceUpdate --
    // const phoneTotalPrice = newPhoneNumber * 1000;
    // const phoneTotalElement = document.getElementById('phone-total');
    // phoneTotalElement.innerText = phoneTotalPrice;


    // function-1: phoneUpdate --
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const previousPhoneNumber = parseInt(phoneNumberField.value);
    // const newPhoneNumber = previousPhoneNumber - 1;
    // phoneNumberField.value = newPhoneNumber;
});