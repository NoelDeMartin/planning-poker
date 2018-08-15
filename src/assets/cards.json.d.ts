declare module '@/assets/cards.json' {
    interface Card {
        name: string;
        file: string;
        url?: string;
    }

    const cards: Card[];
    export default cards;
}
