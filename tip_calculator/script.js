const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const button = document.getElementById('calculate');
const result = document.getElementById('result');

button.addEventListener("click", function() {

    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value);

    if (bill === 0 || tipPercent === 0) {
      result.textContent = "Please enter valid values";
      return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;

    result.textContent = 
        "Tip : Rs." + tipAmount.toFixed(2) + 
        " | Total : Rs" + total.toFixed(2);
});