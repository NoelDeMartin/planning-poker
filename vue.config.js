module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/theme.scss";`,
                // TODO
                // file: 'src/theme.scss',
            },
        },
    },
    pwa: {
        name: 'Planning Poker',
        themeColor: '#42a5f5',
        msTileColor: '#42a5f5',
    },
};
