import { ShoppingList } from "./shoppingList.js";
import {UI} from "./ui.js";

const shoppingList = new ShoppingList();
const ui = new UI(shoppingList);
ui.renderItems();