const transactionForm = document.getElementById('transaction-form');    
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const typeofExpense = document.getElementById('type');
const breakdownList = document.getElementById('breakdown-list');
const transactionList = document.getElementById('transaction-list');

let transactions = [];
let totalExpense = 0;
let totalIncome = 0;
let categoryTotals = {};

transactionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeofExpense.value;
    
    if (category && !isNaN(amount)) {
        const transaction = { category, amount, type };
        transactions.push(transaction);
        
        if (type === 'income') {   
            totalIncome += amount;
        } else {
            totalExpense += amount;
        }
        
        if (categoryTotals[category]) {
            categoryTotals[category] += amount;
        } else {
            categoryTotals[category] = amount;
        }
alert(`Transaction Added! You ${type === 'income' ? 'earned' : 'spent'} ₹${amount.toFixed(2)} on ${category}`);

updateSummary();
displayTransactions();
        categoryInput.value = '';
        amountInput.value = '';
        typeofExpense.value = 'expense';
    }
});

function updateSummary() {
    const balance = totalIncome - totalExpense;
    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);
    
    updateBreakdown();
}

function displayTransactions() {
    transactionList.innerHTML = ''; 
    
    transactions.forEach((transaction, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${transaction.category} - ₹${transaction.amount.toFixed(2)} (${transaction.type})</span>
        `;
        transactionList.appendChild(li);
    });
}

function updateBreakdown() {
    breakdownList.innerHTML = '';
    
    for (let category in categoryTotals) {
        const li = document.createElement('li');
        li.textContent = `${category}: ₹${categoryTotals[category].toFixed(2)}`;
        breakdownList.appendChild(li);
    }
}
document.cookie = "Salary = 50000";
document.cookie = "Freelance = 20000";
document.cookie = "Food = 15000";
document.cookie = "Rent = 10000";
document.cookie = "Entertainment = 5000";
