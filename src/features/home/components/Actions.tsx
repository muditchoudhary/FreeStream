import { useUser, UserButton } from '@clerk/clerk-react';
import { useNavigate, Link } from 'react-router-dom';

import { Clapperboard } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Actions() {
    const navigate = useNavigate();
    const { user } = useUser();

    const logIn = () => {
        navigate('/signin');
    };

    return (
        <div className="flex justify-end items-center gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <Button
                    onClick={logIn}
                    size="sm"
                    variant="primary"
                    className="text-white"
                >
                    Login
                </Button>
            )}
            {!!user && (
                <div className="flex items-center gap-x-2">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-white bg-transparent hover:bg-transparent"
                        asChild
                    >
                        <Link to={`/u/${user.username}`}>
                            <Clapperboard className="h-5 w-5 lg:mr-2" />
                            <span className="hidden lg:block">Dashboard</span>
                        </Link>
                    </Button>
                    <UserButton afterSignOutUrl="/" />
                </div>
            )}
        </div>
    );
}

export default Actions;
