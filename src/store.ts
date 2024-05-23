import { configureStore } from '@reduxjs/toolkit';

import sidebarReducer from './features/sidebar/sidebarSlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
});

export default store;
