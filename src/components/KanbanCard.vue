<template>
    <div class="card">
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
    </div>
</template>

<script setup>
defineProps({
    card: {
        type: Object,
        required: true
    }
});
</script>