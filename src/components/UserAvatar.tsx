import { cva, type VariantProps } from 'class-variance-authority';

import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';
import LiveBadge from './LiveBadge';

const avatarSizes = cva('', {
    variants: {
        size: {
            default: 'h-8 w-8',
            lg: 'h-14 w-14',
        },
    },
    defaultVariants: {
        size: 'default',
    },
});

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
    userName: string;
    imageUrl: string;
    isLive?: boolean;
    showBadge?: boolean;
}

function UserAvatar({
    userName,
    imageUrl,
    isLive,
    showBadge,
    size,
}: UserAvatarProps) {
    const canShowBadge = showBadge && isLive;

    return (
        <div className="relative">
            <Avatar
                className={cn(
                    isLive && 'ring-2 ring-rose-500 border-background',
                    avatarSizes({ size })
                )}
            >
                <AvatarImage src={imageUrl} className="object-cover" />
                <AvatarFallback>
                    {userName[0]}
                    {userName[userName.length - 1]}
                </AvatarFallback>
            </Avatar>
            {canShowBadge && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <LiveBadge />
                </div>
            )}
        </div>
    );
}

interface UserAvatarSkeletionProps extends VariantProps<typeof avatarSizes> {}

export function UserAvatarSkeletion({ size }: UserAvatarSkeletionProps) {
    return <Skeleton className={cn('rounded-full', avatarSizes({ size }))} />;
}

export default UserAvatar;
