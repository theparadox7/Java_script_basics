function calculateMaturityAmount() {
    // Get inputs from elements
    const principle = parseFloat(document.getElementById('principle').value);
    const intrestRate = parseFloat(document.getElementById('intrestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Check if inputs are valid
    if (isNaN(principle) || isNaN(intrestRate) || isNaN(tenure)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Perform calculation (using correct formula)
    const maturityAmount = principle * Math.pow((1 + intrestRate / 100), tenure);

    // Display result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Add event listener to button
document.getElementById('calculatebtn').addEventListener('click', calculateMaturityAmount);
