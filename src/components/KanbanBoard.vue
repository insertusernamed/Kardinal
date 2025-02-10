<template>
    <div class="board">
        <div class="board-header">
            <div class="title-container">
                <input v-if="isEditing" ref="titleInput" v-model="editableTitle" @blur="saveTitle"
                    @keyup.enter="saveTitle" class="title-input">
                <h1 v-else @click="startEditing">{{ board.title }}</h1>
            </div>
            <button @click="board.addCard()">+</button>
        </div>
        <div class="container">
            <Card v-for="card in board.cards" :key="card.id" :card="card" :is-new="card.isNew"
                @update:completed="(value) => handleTaskComplete(card.id)"
                @update:description="(value) => handleTaskDescription(card.id, value)" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Card from '@/components/KanbanCard.vue';

const props = defineProps({
    board: {
        type: Object,
        required: true
    },
    isNew: {
        type: Boolean,
        default: false
    }
});

const isEditing = ref(props.isNew);
const editableTitle = ref(props.board.title);
const titleInput = ref(null);

onMounted(() => {
    if (props.isNew) {
        nextTick(() => titleInput.value?.focus());
    }
});

const startEditing = () => {
    isEditing.value = true;
    nextTick(() => titleInput.value?.focus());
};

const saveTitle = () => {
    isEditing.value = false;
    props.board.updateTitle(editableTitle.value);
};

const handleTaskComplete = (taskId) => {
    props.board.toggleTaskComplete(taskId);
};

const handleTaskDescription = (taskId, newDescription) => {
    props.board.updateTaskDescription(taskId, newDescription);
};
</script>

<style scoped>
.board {
    background-color: var(--board-color, var(--light-gray));
    color: #000;
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
    gap: 5px;
    overflow-y: visible;
}

.title-input {
    font-size: 24px;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: inherit;
    line-height: inherit;
    font-weight: normal;
}

h1 {
    font-size: 24px;
    margin: 0;
    padding: 0;
    font-weight: normal;
    cursor: pointer;
}

.board-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.title-container {
    flex-grow: 1;
    margin-right: 10px;
}
</style>