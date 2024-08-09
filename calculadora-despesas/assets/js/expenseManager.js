//Armazena e gerencia a lista de despesas
// Metodos para adicionar, remover e editar despesas.
// Metodos para calcular o total geral e o total por categoria.

import { Expense } from "./expense.js";

export class ExpenseManager {
    constructor() {
        this.expenses = this.loadExpenses();
    }

    addExpense(name, amount, category) {
        const expense = new Expense(name, amount, category);
        this.expenses.push(expense);
        this.saveExpenses();
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.saveExpenses();
    }

    loadExpenses() {
        const expenses = localStorage.getItem('expenses');
        return expenses ? JSON.parse(expenses) : [];
    }

    saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }

    getTotalByCategory() {
        const totals = {};
        this.expenses.forEach(expense => {
            if(totals[expense.category]) {
                total[expense.category] += expense.amount;
            } else {
                totals[expense.category] = expense.amount;
            }
        });
        return totals;
    }

    getExpenses() {
        return this.expenses;
    }
}