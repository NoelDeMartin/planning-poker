<template>
    <div id="planning-poker-deck" class="swiper-container">
        <div class="swiper-wrapper">
            <div v-for="card in cards" :key="card.name" class="swiper-slide">
                <PlanningPokerCard :card="card" />
            </div>
        </div>
        <div class="swiper-pagination" />
        <div class="swiper-button swiper-button-prev">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27 44"
            >
                <path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z" />
            </svg>
        </div>
        <div class="swiper-button swiper-button-next">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 27 44"
            >
                <path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z" />
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Swiper from 'swiper';

import 'swiper/dist/css/swiper.min.css';

import PlanningPokerCard from '@/components/PlanningPokerCard.vue';

import cards, { Card } from '@/assets/cards.json';

interface ComponentData {
    cards: Card[],
    swiper: Swiper | null,
    keyboardListener: EventListener | null,
}

export default Vue.extend({
    components: {
        PlanningPokerCard,
    },
    data(): ComponentData {
        return {
            cards,
            swiper: null,
            keyboardListener: null,
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

        window.addEventListener('keydown', this.keyboardListener = (e: Event) => {
            if (this.swiper) {
                switch((e as KeyboardEvent).keyCode) {
                    case 39: // arrow right
                        this.swiper.slideNext();
                        break;
                    case 37: // arrow left
                        this.swiper.slidePrev();
                        break;
                }
            }
        });
    },
    mounted() {
        this.swiper = new Swiper('#planning-poker-deck', {
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
    destroyed() {
        if (this.keyboardListener) {
            window.removeEventListener('keydown', this.keyboardListener);
            this.keyboardListener = null;
        }
        if (this.swiper) {
            this.swiper.destroy();
            this.swiper = null;
        }
    },
});
</script>

<style lang="scss">
    #planning-poker-deck {
        width: 100vw;
        height: 100vh;

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            height: calc(100% - 50px);
        }

        .swiper-pagination-bullet-active {
            background: $color-active-bullet;
        }

        .swiper-button {
            background: none;
            height: 100vh;
            top: 0;
            bottom: 0;
            margin: 0;
            padding: $buttons-padding;

            &:hover {
                background: $color-overlay;
            }

            svg {
                height: 100%;
                width: 100%;
                fill: $color-buttons;
            }

        }

        .swiper-button-prev {
            left: 0;
        }

        .swiper-button-next {
            right: 0;
        }

    }

    @media(max-width: $mobile-breakpoint) {

        #planning-poker-deck .swiper-button {
            opacity: 0;
        }

    }
</style>
