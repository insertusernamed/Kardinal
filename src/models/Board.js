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
            "todo",
            false
        );
        this.cards.push(newTask);
    }

    toggleTaskComplete(taskId) {
        const task = this.cards.find(card => card.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }
}

export class Task {
    constructor(id, description, status, completed = false) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.completed = completed;
    }
}
