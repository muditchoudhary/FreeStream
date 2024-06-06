import React from 'react';
import { useSelector } from 'react-redux';

import { cn } from '@/lib/utils';
import { AppState } from '@/types/types';

interface WrapperProps {
    children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
    const collapsed = useSelector((state: AppState) => state.sidebar.collapsed);
    // bg-[#151514]
    return (
        <aside
            className={cn(
                'border-2 border-solid border-red-800 fixed left-0 w-60 h-full bg-[#151514]  text-white border-r flex flex-col z-50',
                collapsed && 'w-[70px]'
            )}
        >
            {children}
        </aside>
    );
}

export default Wrapper;
