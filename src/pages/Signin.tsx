import { SignIn } from '@clerk/clerk-react';
import AuthLayout from '@/features/authentication';

function Signin() {
    return (
        <AuthLayout>
            <SignIn path="/sign-in" />;
        </AuthLayout>
    );
}

export default Signin;
