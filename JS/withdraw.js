// Step - 1 : add event handler with the withdraw button
// Step - 2 : Get Withdraw Amount From the Withdraw Input Field
// Step - 3 : Make sure to convert the string into a number using parsefloat
// Step - 4 : Get Previous Withdraw Total
// Step - 5 : Calculate Total withdraw Amount
// Step - 6 : Set Withdraw Total Amount
// Step - 7 : Get the previous balance total
// Step - 8 : Calculate new balance total
// Step - 9 : Set new balance total
// Step - 10 : Clear The input field



// Step 1

document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Step - 2

    const withdrawField = document.getElementById('withdraw-field');

    // Step - 3

    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step - 4 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal  = parseFloat(previousWithdrawTotalString);

    //  Step - 5

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // Step - 6

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step - 7 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step - 8

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // Step - 9 

    balanceTotalElement.innerText = newBalanceTotal;

    // Step - 10

    withdrawField.value = '';
})






