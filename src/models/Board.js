export class Board {
    constructor(id, title, description, columns = []) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.cards = [];
    }

    addCard() {
        const newTask = new Task(
            Date.now(),
            `Task ${this.cards.length + 1}`,
            `Description for Task ${this.cards.length + 1}`,
            "todo"
        );
        this.cards.push(newTask);
    }
}

export class Task {
    constructor(id, title, description, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
