import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect } from 'react';

import { onCollapse, onExpand } from '@/features/sidebar';
import { cn } from '@/lib/utils';

function Container({ children }: { children: React.ReactNode }) {
    const selectCollpased = useSelector((state) => state.sidebar.collapsed);
    const dispatch = useDispatch();
    const matches = useMediaQuery('(max-width: 1024px)');
    useEffect(() => {
        if (matches) {
            dispatch(onCollapse());
        } else {
            dispatch(onExpand());
        }
    }, [matches, dispatch]);
    return (
        <div
            className={cn(
                'flex-1 border-2 border-solid border-red-800',
                selectCollpased ? 'ml-[70px]' : 'ml-[70px] lg:ml-60'
            )}
        >
            {children}
        </div>
    );
}

export default Container;
