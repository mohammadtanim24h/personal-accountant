
// get value of input fields
function getInputValue (inputId) {
    const inputField = document.getElementById(inputId);
    const amount = parseFloat(inputField.value);
    return amount;
}

// input errors
function inputError() {
    document.getElementById('input-error').style.display = 'block';
}

// calculate total expenses and balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getInputValue('income-input');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('cloth-cost');
    // empty input field value handling
    if (isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        document.getElementById('error-message').innerText = 'Input fields can not be empty';
        inputError();
        return;
    }
    // negative input handling
    if (incomeAmount < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        document.getElementById('error-message').innerText = 'Please Enter positive numbers';
        inputError();
        return;
    }
    // total cost
    const totalCost = foodCost + rentCost + clothesCost;
    // total expense more than income error handling
    if (totalCost > incomeAmount) {
        document.getElementById('error-message').innerText = 'Total Expense can not be more than your Income';
        inputError();
        return;
    }
    else {
        document.getElementById('input-error').style.display = 'none';
    }
    // update total expense
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalCost;
    // update balance
    const balance = document.getElementById('balance');
    balance.innerText = incomeAmount - parseFloat(totalExpense.innerText);
} )

// calculate savings and remaining balance 

function getAmount (elementId) {
    const element = document.getElementById(elementId);
    const elementAmount = parseInt(element.innerText);
    return elementAmount;
}

document.getElementById('save-btn').addEventListener('click', function () {
    // calculating saving amount
    debugger;
    const savingPercentage = getInputValue('save-input') / 100;
    const incomeAmount = getInputValue('income-input');
    const savingAmount = incomeAmount * savingPercentage;
    // get balance 
    const balanceAmount = getAmount('balance');
    // error handling when saving amount is more than balance
    if (savingAmount > balanceAmount) {
        // alert('you cant save more than your balance');
        document.getElementById('save-error-message').innerText = 'You can not save more than your balance';
        document.getElementById('saving-error').style.display = 'block';
        return;
    }
    else {
        document.getElementById('saving-error').style.display = 'none';
    }
    // updating saving amount
    const savingAmountText = document.getElementById('saving-amount');
    savingAmountText.innerText = savingAmount;
    // calculating remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balanceAmount - savingAmount;
} )