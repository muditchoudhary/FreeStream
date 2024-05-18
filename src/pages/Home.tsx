import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function Home() {
    return (
        <header className="header">
            <div>
                <div>
                    <p>Clerk + React + React Router App</p>
                </div>
                <SignedIn>
                    <UserButton afterSignOutUrl="/signin" />
                </SignedIn>
                <SignedOut>
                    <Link to="/signin">Sign In</Link>
                </SignedOut>
            </div>
        </header>
    );
}

export default Home;
