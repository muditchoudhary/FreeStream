import { useUser, useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const { VITE_BACKEND_BASE_URL } = import.meta.env;

interface User {
    id: string;
    username: string;
    imageUrl: string;
    externalUserId: string;
    bio: string | null;
    createdAt: string;
    updatedAt: string;
}

async function useAuthService() {
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();
    const { getToken } = useAuth();
    useEffect(() => {
        const getSelf = async () => {
            const token = await getToken();
            const url = `${VITE_BACKEND_BASE_URL}/users/${user?.id}`;
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            } catch (error) {
                console.log('USE_AUTH_SERVICE_HOOK');
                console.error(error);
            }
        };
        setIsLoading(true);
        getSelf();
    }, [session, user]);
    return { isLoading };
}
// async function getSelf(externalUserId: string | undefined) {
//     const url = `${VITE_BACKEND_BASE_URL}/users/${externalUserId}`;
//     const response = await axios.get<GetUserResponse>(url);
//     return response.data;
// }
