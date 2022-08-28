// function-3:
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal = parseFloat(phoneTotalElement.innerText);
    return currentPhoneTotal;
}

// function-5:
function setTextElementVakueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

// function-4:
function calculateSubTotal(){
    //calculate total:
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementVakueById('sub-total', currentSubTotal);

    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;

    //calculate tax
    // function-5:
    const taxAmountString = (currentSubTotal * 0.01).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementVakueById('tax-total', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementVakueById('final-total', finalAmount);
}

document.getElementById('check-out').addEventListener('click', function(){
    alert('Successfully Done');
})