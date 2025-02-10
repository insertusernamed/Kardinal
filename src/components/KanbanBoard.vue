<template>
    <div class="board">
        <h1>{{ board.title }}</h1>
        <button @click="board.addCard()">+</button>
        <div class="container">
            <div class="card-container" v-for="card in board.cards" :key="card.id">
                <Card :card="card" @update:completed="(value) => handleTaskComplete(card.id)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/KanbanCard.vue';

const props = defineProps({
    board: {
        type: Object,
        required: true
    }
});

const handleTaskComplete = (taskId) => {
    props.board.toggleTaskComplete(taskId);
};
</script>

<style scoped>
.board {
    background-color: var(--light-gray);
    color: var(--cardinal-red);
    padding: 20px;
    min-height: 100px;
    width: 350px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 8px;
    align-self: flex-start;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: visible;
    padding-right: 10px;
}

.card-container {
    background-color: var(--white);
    border-radius: 4px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 300px;
    max-width: 100%;
}
</style>