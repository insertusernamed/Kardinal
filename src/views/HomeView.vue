<template>
    <main>
        <h1 class="d-flex align-items-center">
            Welcome to Kardinal
        </h1>
        <button class="add-board-button" @click="addBoard">Add Board</button>

        <h2>Amount of boards: {{ boards.length }}</h2>
        <div class="container">
            <KanbanBoard v-for="board in boards" :key="board.title" :board="board" />
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import KanbanBoard from '@/components/KanbanBoard.vue';
import { Board } from '@/models/Board.js';

const boards = ref([]);

const addBoard = () => {
    const boardNumber = boards.value.length + 1;
    boards.value.push(new Board(
        Date.now(),
        `Board ${boardNumber}`,
        `Description for Board ${boardNumber}`,
        []
    ));
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}

.add-board-button {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
}
</style>