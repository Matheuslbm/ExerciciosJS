import { ShoppingList } from "./script.js";

export class UI {
    constructor(shoppingList){
        this.shoppingList = shoppingList;
        this.shoppingListElement = document.querySelector('shopping-list');
        this.itemInput = document.querySelector('item-input');
        this.itemCountsElement = document.querySelector('item-counts');

        document.querySelector('add-item-btn').addEventListener(çlick, () => this.addItem());
    }

    renderItems() {
        
    }
}