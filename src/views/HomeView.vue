<template>
    <main>
        <h1 class="d-flex align-items-center">Welcome to Kardinal</h1>
        <button class="add-board-button" @click="addBoard">Add Board</button>

        <h2>Amount of boards: {{ boards.length }}</h2>
        <div class="container">
            <KanbanBoard v-for="board in boards" :key="board.title" :board="board" :is-new="board.isNew" />
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import KanbanBoard from "@/components/KanbanBoard.vue";
import { Board } from "@/models/Board.js";
import { saveBoards, loadBoards, hasRoadmapBoard } from "@/utils/storage";

const boards = ref([]);

onMounted(() => {
    try {
        const loadedBoards = loadBoards();
        if (loadedBoards.length > 0) {
            boards.value = loadedBoards;
            if (!hasRoadmapBoard(boards.value)) {
                boards.value.unshift(Board.createRoadmapBoard());
            }
        } else {
            boards.value = [Board.createRoadmapBoard()];
        }
    } catch (error) {
        console.error("Error in mounting HomeView:", error);
        boards.value = [Board.createRoadmapBoard()];
    }
});

watch(
    () => boards.value,
    (newBoards) => {
        saveBoards(newBoards);
    },
    { deep: true },
);

const addBoard = () => {
    const boardNumber = boards.value.length + 1;
    const newBoard = new Board(
        Date.now(),
        `Board ${boardNumber}`,
        `Description for Board ${boardNumber}`,
        [],
    );
    newBoard.isNew = true;
    boards.value.push(newBoard);
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 20px;
    overflow-x: auto;
    justify-content: flex-start;
    min-width: calc(100vw - 80px);
    margin-right: -1rem;
}
</style>
