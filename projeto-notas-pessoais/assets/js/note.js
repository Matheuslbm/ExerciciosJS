// A classe note representa uma nota

export class Note {
    constructor(title, content, category) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.id = Date.now(); // gera id unico com base no timestamp
        this.dateCreated = new Date(); // armazena a data de criacao
    }
}