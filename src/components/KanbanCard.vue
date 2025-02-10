<template>
    <div class="card-content" :class="{ 'completed': card.completed }">
        <input type="checkbox" :checked="card.completed" @change="toggleComplete">
        <input v-if="isEditing" ref="descInput" v-model="editableDescription" @blur="saveDescription"
            @keyup.enter="saveDescription" class="description-input">
        <p v-else @click="startEditing">{{ card.description }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps({
    card: {
        type: Object,
        required: true
    },
    isNew: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:completed', 'update:description']);

const isEditing = ref(props.isNew);
const editableDescription = ref(props.card.description);
const descInput = ref(null);

onMounted(() => {
    if (props.isNew) {
        nextTick(() => descInput.value?.focus());
    }
});

const startEditing = () => {
    isEditing.value = true;
    nextTick(() => descInput.value?.focus());
};

const saveDescription = () => {
    if (editableDescription.value.trim() !== '') {
        isEditing.value = false;
        emit('update:description', editableDescription.value);
    }
};

const toggleComplete = () => {
    emit('update:completed', !props.card.completed);
};
</script>

<style scoped>
.card-content {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    padding: 8px 0;
    color: #000;
}

input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-top: 3px;
    flex-shrink: 0;
    cursor: pointer;
}

p {
    margin: 0;
    flex-grow: 1;
    word-wrap: break-word;
    min-width: 0;
    line-height: 1.4;
    font-size: 14px;
}

.completed {
    background-color: #f5f5f5;
}

.completed p {
    text-decoration: line-through;
    color: #666;
}

.description-input {
    border: none;
    background: transparent;
    flex-grow: 1;
    font-size: 14px;
    font-family: inherit;
    line-height: 1.4;
    padding: 0;
    margin: 0;
    width: 100%;
}
</style>