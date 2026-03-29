// Adding the button to listen for clicks
document.getElementById('calcBtn').addEventListener('click', function() {
    
    // to Get the current values from the input fields
    const pricePerLiter = parseFloat(document.getElementById('price').value);
    const litersPurchased = parseFloat(document.getElementById('liters').value);
    
    // Calculate the total cost
    const totalCost = pricePerLiter * litersPurchased;
    
    // Update the p tag with the result
    const displayElement = document.getElementById('totalDisplay');
    displayElement.textContent = "Total Cost: £" + totalCost.toFixed(2);
    
    // change color briefly to let users know it is updating
    displayElement.style.color = "#e67e22";
    setTimeout(() => {
        displayElement.style.color = "#2c3e50";
    }, 500);
});
