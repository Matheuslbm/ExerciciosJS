import { NoteManager } from './noteManager.js';
import { UI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const noteManager = new NoteManager();
    const ui = new UI(noteManager);
});

// domcontentloades garante que o codigo so execute apos o carregamento do DOM
// NoteManager e UI instancia o gerenciador de notas e a interface do usuário
// UI envia noteManager no parametro