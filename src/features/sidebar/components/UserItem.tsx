import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { AppState } from '@/types/types';
import UserAvatar from '@/components/UserAvatar';
import LiveBadge from '@/components/LiveBadge';

interface UserItemsProps {
    userName: string;
    imageUrl: string;
    isLive?: boolean;
}

function UserItem({ userName, imageUrl, isLive = false }: UserItemsProps) {
    const location = useLocation();
    const { pathname } = location;
    const collapsed = useSelector((state: AppState) => state.sidebar.collapsed);

    const href = `/${userName}`;
    const isActive = pathname === href;
    return (
        <Button
            asChild
            variant="ghost"
            className={cn(
                'w-full h-12',
                collapsed ? 'justify-center' : 'justify-start',
                isActive && ' bg-accent'
            )}
        >
            <Link to={href}>
                <div
                    className={cn(
                        'flex items-center w-full gap-x-4',
                        collapsed && 'justify-center'
                    )}
                >
                    <UserAvatar
                        userName={userName}
                        imageUrl={imageUrl}
                        isLive={isLive}
                    />
                    {!collapsed && <p className="truncate">{userName}</p>}
                    {!collapsed && isLive && <LiveBadge className="ml-auto" />}
                </div>
            </Link>
        </Button>
    );
}

export function UserItemSkeletion() {
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
            <div className="flex-1">
                <Skeleton className="h-6" />
            </div>
        </li>
    );
}

export default UserItem;
