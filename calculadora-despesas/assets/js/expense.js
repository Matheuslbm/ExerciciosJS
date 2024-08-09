// Responsavel por representar uma despesa com propriedades como nome, valor e categoria
// despesa individual

export class Expense {
    constructor(name, amount, category){
        this.name = name,
        this.amount = parseFloat(amount);
        this.category = category;
        this.id = Date.now();
    }
}