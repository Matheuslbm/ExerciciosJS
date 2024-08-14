// Gerencia as notas, adiciona, remove, busca e organiza as notas

import { Note } from './note.js';

export class NoteManager {
    constructor() {
        this.notes = this.loadNotes(); // carrega as notas do localStorage
    }

    addNote(title, content, category) {
        const note = new Note(title, content, category);
        this.notes.push(note);
        this.saveNotes();
    }

    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
    }

    loadNotes() {
        const notes = localStorage.getItem('notes')
        return notes ? JSON.parse(notes) : [];
    }

    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
    }

    searchNotes(query) {
        return this.notes.filter(note => 
            note.title.toLowerCase().includes(query.toLowerCase()) ||
            note.content.toLowerCase().includes(query.toLowerCase())
        );
    }

    getNotes() {
        return this.notes;
    }
}