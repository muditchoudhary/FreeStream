import { createSlice } from '@reduxjs/toolkit';

export interface SidebarState {
    collapsed: boolean;
}

const initialState: SidebarState = {
    collapsed: false,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        onExpand(state) {
            state.collapsed = false;
        },

        onCollapse(state) {
            state.collapsed = true;
        },
    },
});

export const { onExpand, onCollapse } = sidebarSlice.actions;

export default sidebarSlice.reducer;
