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
            false,
            true
        );
        this.cards.push(newTask);
    }

    toggleTaskComplete(taskId) {
        const task = this.cards.find(card => card.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateTaskDescription(taskId, newDescription) {
        const task = this.cards.find(card => card.id === taskId);
        if (task) {
            task.updateDescription(newDescription);
        }
    }

    static createRoadmapBoard() {
        const roadmap = new Board(
            'roadmap',
            'Project Roadmap',
            'Features to implement',
            []
        );

        const features = [
            { text: 'Dark/Light Mode Themes', done: false },
            { text: 'Customizable Boards - Colors, icons, and multiple board support', done: false },
            { text: 'Responsive Design - Mobile-friendly layout', done: false },
            { text: 'Card Customization - Custom fields and layouts', done: false },
            { text: 'Search and Filter - Advanced filtering options', done: false },
            { text: 'Custom Card Templates', done: false },
            { text: 'Drag-and-Drop Interface - Implement vue-draggable-next', done: false },
            { text: 'External Tool Integration - Slack, Trello, CSV export', done: false },
            { text: 'User Authentication - Email and social login', done: false },
            { text: 'Notifications System - Email and push notifications', done: false },
            { text: 'Real-Time Updates - WebSocket integration', done: false },
            { text: 'Collaboration Features - Chat and file attachments', done: false },
            { text: 'Analytics and Reports - Task completion tracking', done: false },
            { text: 'CI/CD Pipeline Integration', done: false }
        ];

        features.forEach(feature => {
            const task = new Task(
                Date.now() + Math.random(),
                feature.text,
                'planned',
                feature.done
            );
            roadmap.cards.push(task);
        });

        return roadmap;
    }
}

export class Task {
    constructor(id, description, status, completed = false, isNew = false) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.completed = completed;
        this.isNew = isNew;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
        this.isNew = false;
    }
}
