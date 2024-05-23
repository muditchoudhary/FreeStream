import { Route, Routes } from 'react-router-dom';
import {
    RedirectToSignIn,
    SignIn,
    SignUp,
    SignedIn,
    SignedOut,
} from '@clerk/clerk-react';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AuthLayout from './features/authentication';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/signup"
                element={
                    <AuthLayout>
                        <SignUp signInUrl="signin" />
                    </AuthLayout>
                }
            />
            <Route
                path="/signin"
                element={
                    <AuthLayout>
                        <SignIn signUpUrl="signup" />
                    </AuthLayout>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <>
                        <SignedIn>
                            <Dashboard />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                }
            />
        </Routes>
    );
}

export default App;
