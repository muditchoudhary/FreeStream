import { useSelector } from 'react-redux';

import { AppState, User } from '@/types/types';

import UserItem, { UserItemSkeletion } from './UserItem';

interface RecommendedProps {
    data: User[];
}
function Recommended({ data }: RecommendedProps) {
    const collapsed = useSelector((state: AppState) => state.sidebar.collapsed);
    const showLabel = !collapsed && data.length > 0;
    return (
        <div>
            {showLabel && (
                <div className="pl-6 mb-4">
                    <p className="text-sm text-muted-foreground">Recommended</p>
                </div>
            )}
            <ul className="space-y-2 px-2">
                {data.map((user) => (
                    <UserItem
                        key={user.id}
                        userName={user.username}
                        imageUrl={user.imageUrl}
                        isLive={false}
                    />
                ))}
            </ul>
        </div>
    );
}

export function RecommendedSkeleton() {
    return (
        <ul className="px-2">
            {[...Array(3)].map((_, i) => (
                <UserItemSkeletion key={i} />
            ))}
        </ul>
    );
}
export default Recommended;
