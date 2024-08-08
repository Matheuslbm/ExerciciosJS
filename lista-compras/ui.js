import { ShoppingList } from "./shoppingList.js";

export class UI {
    constructor(shoppingList){
        this.shoppingList = shoppingList;
        this.shoppingListElement = document.querySelector('.shopping-list');
        this.itemInput = document.querySelector('.item-input');
        this.itemCountsElement = document.querySelector('.item-counts');

        document.querySelector('.add-item-btn').addEventListener("click", () => this.addItem());
    }

    renderItems() {
       this.shoppingListElement.innerHTML = '';

       const items = this.shoppingList.getItems();

       items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            if (item.bought) li.classList.add('bought');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.classList.add('edit-btn');
            editBtn.addEventListener('click', () => this.editItem(index));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => this.deleteItem(index));

            const buyBtn = document.createElement('button');
            buyBtn.textContent = item.bought ? 'Desmarcar' : 'Comprar';
            buyBtn.classList.add('buy-btn');
            buyBtn.addEventListener('click', () => this.toggleBought(index));

            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            li.appendChild(buyBtn);
            this.shoppingListElement.appendChild(li);
       });
       this.updateCounts();
    }

    addItem() {
        const itemName = this.itemInput.value.trim();
        if(itemName) {
            this.shoppingList.addItem(itemName);
            this.itemInput.value = '';
            this.renderItems();
        }
    }

    editItem(index) {
        const newName = prompt('Novo nome:', this.shoppingList.getItems()[index].name);
        if (newName) {
            this.shoppingList.editItem(index, newName);
            this.renderItems();
        }
    }

    deleteItem(index) {
        this.shoppingList.removeItem(index);
        this.renderItems();
    }

    toggleBought(index) {
        this.shoppingList.toggleItemBought(index);
        this.renderItems();
    }

    updateCounts() {
        const items = this.shoppingList.getItems();
        const total = items.length;
        const bought = items.filter(item => item.bought).length;

        this.itemCountsElement.textContent = `Total: ${total} | Comprados: ${bought} | Não comprados: ${total - bought}`;
    }
}

