import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-2 border-solid border-red-800 h-full flex items-center justify-center">
            {children}
        </div>
    );
}

export default AuthLayout;
