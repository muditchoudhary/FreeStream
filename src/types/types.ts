import { SidebarState } from '@/features/sidebar/sidebarSlice';

export interface User {
    id: string;
    username: string;
    imageUrl: string;
    externalUserId: string;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface AppState {
    sidebar: SidebarState;
}
