import { useEffect, useState } from 'react';

import { User } from '@/types/types';

import Wrapper from './components/Wrapper';
import Toggle from './components/Toggle';
import Recommended, { RecommendedSkeleton } from './components/Recommended';
import getRecommendedUsers from './lib/recommended-service';

export function SidebarSkeletion() {
    return (
        <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
            <RecommendedSkeleton />
        </aside>
    );
}

function Sidebar() {
    const [recommended, setRecommended] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data: { users: User[] } = await getRecommendedUsers();
                setRecommended(data.users);
            } catch (error) {
                console.log('GET_RECOMMENDED');
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <Wrapper>
            {isLoading && <SidebarSkeletion />}
            {!isLoading && (
                <>
                    <Toggle />
                    <div className=" border-2 border-solid border-blue-800 space-y-4 pt-4 lg:pt-0 ">
                        <Recommended data={recommended} />
                    </div>
                </>
            )}
        </Wrapper>
    );
}

export default Sidebar;
