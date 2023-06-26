// Step - 1 : Add Event Listener to the Deposit Button

document.getElementById('btn-deposit').addEventListener('click', function(){

    // Step - 2 : Get the deposit amount from the deposit input field
    // For Input Field Use .value to get the value inside the input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step 3 - get the total deposit amount
    // for non-input (element other than input, textarea) use innertext to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step - 4 - Add numbers to set the total deposit

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // Set the deposit total

    depositTotalElement.innerText = currentDepositTotal;

    // Step 5: Get Balance Current Total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step - 6: Calculate Current Total Balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    // Set the Balance Total 

    balanceTotalElement.innerText = currentBalanceTotal;

    // Clear the Deposit field

    depositField.value = '';



})