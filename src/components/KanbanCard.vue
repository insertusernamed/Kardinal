<template>
    <div class="card">
        <div class="card-content" :class="{ 'completed': card.completed }">
            <input type="checkbox" :checked="card.completed" @change="toggleComplete">
            <p>{{ card.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    card: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['update:completed']);

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
}

.completed {
    background-color: #f5f5f5;
}

.completed p {
    text-decoration: line-through;
    color: #666;
}
</style>