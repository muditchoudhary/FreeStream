import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import userAvatar from '../../../assets/avatar.svg';

function Logo() {
    return (
        <Link to="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className=" bg-white rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
                    <img
                        src={userAvatar}
                        alt="User Avatar"
                        height="32"
                        width="32"
                    />
                </div>
                <div className={cn('hidden lg:block font-poppins')}>
                    <p className="text-lg font-semibold">FreeStream</p>
                    <p className="text-xs text-muted-foreground">
                        Go Live Free
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Logo;
