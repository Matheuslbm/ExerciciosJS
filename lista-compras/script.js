import { UI } from "./ui";

export class ShoppingList {
    constructor() {
        this.items = this.loadItems();
    }

    addItem(itemName) {
        this.items.push({name: itemName, bought: false});
        this.saveItems();
    }
    
    removeItem(index) {
        this.items.splice(index, 1);
        this.saveItems();
    }

    editItem(index, newName) {
        this.items[index].name = newName;
        this.saveItems();
    }

    toggleItemBought(index){
        this.items[index].bought = !this.items[index].bought;
        this.saveItems();
    }

    saveItems() {
        localStorage.setItem('shoppingList', JSON.stringify(this.items));
    }

    loadItems() {
        const items = localStorage.getItem('shoppingList');
        return items ? JSON.parse(items) : [];
    }

    getItems() {
        return this.items;
    }
}