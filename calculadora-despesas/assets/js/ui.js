// Responsavel por atualizar a interface do usuário
// Metodos para renderizar a lista de despesas e atualizar os totais

import {ExpenseManager} from './expenseManager.js';

export class UI {
    constructor(expenseManager) {
        this.expenseManager = expenseManager;
        this.expenseListElement = document.getElementById('expense-list');
        this.totalAmountElement = document.getElementById('total-amount');
        this.categoryTotalsElement = document.getElementById('category-totals');

        document.getElementById('expense-form').addEventListener('submit', (e) => this.addExpense(e));
    }

    renderExpenses() {
        this.expenseListElement.innerHTML = '';
        const expenses = this.expenseManager.getExpenses();

        expenses.forEach(expense => {
            const li = document.createElement('li');
            li.textContent = `${expense.name} - R$ ${expense.amount.toFixed(2)} (${expense.category})`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.addEventListener('click', () => {
                this.expenseManager.removeExpense(expense.id);
                this.renderExpenses();
                this.updateSummary()
            });
            li.appendChild(deleteBtn);
            this.expenseListElement.appendChild(li);
        })
    }

    updateSummary() {
        const totalAmount = this.expenseManager.getTotalAmount();
        this.totalAmountElement.textContent = `R$ ${totalAmount.toFixed(2)}`;

        const totalsByCategory = this.expenseManager.getTotalByCategory();
        this.categoryTotalsElement.innerHTML = '';

        for (const category in totalsByCategory) {
            const li = document.createElement('li');
            li.textContent = `${category}: R$ ${totalsByCategory[category].toFixed(2)}`;
            this.categoryTotalsElement.appendChild(li);
        }
    }

    addExpense(e) {
        e.preventDefault();

        const name = document.getElementById('expense-name').value;
        const amount = document.getElementById('expense-amount').value;
        const category = document.getElementById('expense-category').value;

        this.expenseManager.addExpense(name, amount, category);
        this.renderExpenses();
        this.updateSummary();

        document.getElementById('expense-form').reset();
    }
}