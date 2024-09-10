function calculateMaturityAmount() {
    // Get inputs from elements
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Check if inputs are valid
    if (isNaN(principal) || isNaN(interestRate) || isNaN(tenure)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Perform calculation (using correct formula)
    const maturityAmount = principal * Math.pow((1 + interestRate / 100), tenure);

    // Display result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

// Ensure the DOM is fully loaded before adding event listener
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calculatebtn').addEventListener('click', calculateMaturityAmount);
});
