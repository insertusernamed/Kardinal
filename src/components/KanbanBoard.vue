<template>
    <div class="board">
        <h1>{{ board.title }}</h1>
        <button @click="board.addCard()">
            +
        </button>
        <div class="container">
            <div class="card-container" v-for="card in board.cards" :key="card.id">
                <Card :card="card" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/KanbanCard.vue';
defineProps({
    board: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
.board {
    background-color: var(--light-gray);
    color: var(--cardinal-red);
    padding: 20px;
    overflow-y: auto;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-container {
    background-color: var(--white);
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>