<template>
    <div id="app">
        <PlanningPokerDeck />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PlanningPokerDeck from '@/components/PlanningPokerDeck.vue';

export default Vue.extend({
    components: {
        PlanningPokerDeck,
    },
});
</script>

<style lang="scss">
    body {
        margin: 0;
    }
    #app {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background: #2222ee;
    }
</style>
