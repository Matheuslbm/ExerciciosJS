import { NoteManager } from './noteManager.js';

// interage com o DOM, exibe as notas e lida com as açoes do usuario.

export class UI {
    constructor(noteManager) {
        this.noteManager = noteManager;
        this.noteListElement = document.getElementById('note-list');
        this.searchInput = document.getElementById('search-notes');

        // evento de busca, se o usuario fizer uma busca exibe apenas as notas correspondentes
        this.searchInput.addEventListener('input', () => this.renderNotes(this.searchInput.value));

        // evento de submissao do form
        document.getElementById('note-form').addEventListener('submit', (e) => this.addNoteHandler(e));

        //renderiza as notas iniciais
        this.renderNotes();
    }

    renderNotes(query = '') {
        this.noteListElement.innerHTML = '';
        // checando se o usuario fez busca
        const notes = query ? this.noteManager.searchNotes(query) : this.noteManager.getNotes();

        notes.forEach(note => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${note.title}</strong> - 
            ${note.content} <span class="note-category> (${note.category})</span>"`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                this.noteManager.removeNote(note.id);
                this.renderNotes();
            });

            li.appendChild(deleteBtn);
            this.noteListElement.appendChild(li);
        })
    }

    // lida com adiçao de uma nova nota ao receber o evento de submissao do forumalario
    addNoteHandler(e) {
        e.preventDefault();

        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;
        const category = document.getElementById('note-category').value;

        this.noteManager.addNote(title, content, category);
        this.renderNotes();

        e.target.reset();
    }
}