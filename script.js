function addExpense() {
    const nameInput = document.getElementById('expenseName');
    const amountInput = document.getElementById('expenseAmount');
    const expenseList = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');

    const expenseName = nameInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value.trim());

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${expenseName}: $${expenseAmount.toFixed(2)}
        <button class="remove-btn" onclick="removeExpense(this, ${expenseAmount})">Remove</button>
    `;

    expenseList.appendChild(li);
    updateTotalAmount(expenseAmount);

    nameInput.value = '';
    amountInput.value = '';
}

function removeExpense(button, amount) {
    const li = button.parentElement;
    li.remove();
    updateTotalAmount(-amount);
}

function updateTotalAmount(amount) {
    const totalAmount = document.getElementById('totalAmount');
    const currentTotal = parseFloat(totalAmount.textContent);
    totalAmount.textContent = (currentTotal + amount).toFixed(2);
}
