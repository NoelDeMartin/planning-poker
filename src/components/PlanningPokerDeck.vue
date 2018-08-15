<template>
    <div id="planning-poker-deck" :style="{ width: 100 * cards.length + 'vw' }">
        <div v-for="card in cards" :key="card.name" class="card-wrapper">
            <PlanningPokerCard :card="card" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PlanningPokerCard from '@/components/PlanningPokerCard.vue';

import cards from '@/assets/cards.json';

export default Vue.extend({
    components: {
        PlanningPokerCard,
    },
    data() {
        return {
            cards,
        };
    },
    created() {
        const requireCardImage = require.context('@/assets/cards/', true);
        requireCardImage.keys().forEach((path: string) => {
            for (const card of this.cards) {
                if (path.indexOf(card.file) !== -1) {
                    card.url = requireCardImage(path);
                }
            }
        });
    },
});
</script>

<style lang="scss">
    #planning-poker-deck {
        display: flex;
        flex-direction: row;

        .card-wrapper {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
</style>
