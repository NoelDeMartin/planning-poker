<template>
    <img :src="card.url" class="planning-poker-card">
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
    .planning-poker-card {
        height: 100vh;
        max-width: 90vw;
        max-height: 90vh;
        border-radius: 1rem;
    }
</style>
