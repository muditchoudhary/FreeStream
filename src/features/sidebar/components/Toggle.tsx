import { useDispatch, useSelector } from 'react-redux';

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { AppState } from '@/types/types';

import { onCollapse, onExpand } from '../sidebarSlice';
import { Button } from '@/components/ui/button';

function Toggle() {
    const dispatch = useDispatch();
    const collapsed = useSelector((state: AppState) => state.sidebar.collapsed);
    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                    <Button
                        onClick={() => dispatch(onExpand())}
                        variant="ghost"
                        className="h-auto p-2"
                    >
                        <ArrowRightFromLine className="h-4 w-4" />
                    </Button>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className="font-semibold text-primary text-white">
                        For you
                    </p>
                    <Button
                        onClick={() => dispatch(onCollapse())}
                        className="h-auto p-2 ml-auto"
                        variant="ghost"
                    >
                        <ArrowLeftFromLine className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </>
    );
}

export default Toggle;
