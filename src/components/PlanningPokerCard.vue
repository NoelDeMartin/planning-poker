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
        height: auto;
        max-height: 100%;
        max-width: 90vw;
        border-radius: 1rem;
    }
</style>
