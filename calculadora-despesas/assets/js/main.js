import { ExpenseManager } from './expenseManager.js';
import {UI} from './ui.js';

const expenseManager = new ExpenseManager();
const ui = new UI(expenseManager);

ui.renderExpenses();
ui.updateSumary();