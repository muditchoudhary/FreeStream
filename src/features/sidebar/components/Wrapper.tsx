import React from 'react';
import { UseSelector, useSelector } from 'react-redux';

import { cn } from '@/lib/utils';
import { onCollapse, onExpand, SidebarState } from '../sidebarSlice';

interface WrapperProps {
    children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
    const selectCollapsed = useSelector((state) => state.sidebar.collapsed);
    // bg-[#151514]
    return (
        <aside
            className={cn(
                'border-2 border-solid border-red-800 fixed left-0 w-60 h-full bg-[#151514]  text-white border-r flex flex-col z-50',
                selectCollapsed && 'w-[70px]'
            )}
        >
            {children}
        </aside>
    );
}

export default Wrapper;
