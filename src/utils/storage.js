import { Board, Task } from '@/models/Board';

const STORAGE_KEY = 'kardinal_boards';

export function saveBoards(boards) {
    try {
        const boardsData = Array.isArray(boards) ? boards : boards.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(boardsData));
    } catch (error) {
        console.error('Error saving boards:', error);
    }
}

export function loadBoards() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return [];

        const boards = JSON.parse(data);
        if (!Array.isArray(boards)) return [];

        return boards.map(boardData => {
            const board = new Board(
                boardData.id,
                boardData.title,
                boardData.description
            );

            if (Array.isArray(boardData.cards)) {
                board.cards = boardData.cards.map(cardData =>
                    Object.assign(new Task(
                        cardData.id,
                        cardData.description,
                        cardData.status,
                        cardData.completed
                    ), cardData)
                );
            }

            return board;
        });
    } catch (error) {
        console.error('Error loading boards:', error);
        return [];
    }
}

export function hasRoadmapBoard(boards) {
    return boards.some(board => board.id === 'roadmap');
}
