
// get value of input fields
function getInputValue (inputId) {
    const inputField = document.getElementById(inputId);
    const amount = parseFloat(inputField.value);
    return amount;
}
// calculate total expenses and balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeAmount = getInputValue('income-input');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('cloth-cost');
    // invalid input handling
    if (isNaN(incomeAmount) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        alert('please enter numbers in the input fields');
        return;
    }
    // negative input handling
    if (incomeAmount < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        alert('please enter positive numbers in the input fields');
        return;
    }
    // total cost
    const totalCost = foodCost + rentCost + clothesCost;
    if (totalCost > incomeAmount) {
        alert('total expense cant be more than your income');
        return;
    }
    // update total expense
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseAmount = parseFloat(totalExpense.innerText);
    totalExpense.innerText = totalExpenseAmount + totalCost;
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
    const savingPercentage = getInputValue('save-input') / 100;
    const incomeAmount = getInputValue('income-input');
    const savingAmount = savingPercentage * incomeAmount;
    // get balance 
    const balanceAmount = getAmount('balance');
    if (savingAmount > balanceAmount) {
        alert('you cant save more than your balance');
        return;
    }
    const savingAmountText = document.getElementById('saving-amount');
    savingAmountText.innerText = savingAmount;
    // calculating remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balanceAmount - savingAmount;
} )