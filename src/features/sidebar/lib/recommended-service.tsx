import axios from 'axios';

import getSelf from '@/lib/auth-service';
import { User } from '@/types/types';

const { VITE_BACKEND_BASE_URL } = import.meta.env;

interface GetRecommendedUsersSuccessResponse {
    users: User[];
}

async function getRecommendedUsers(
    externalUserId: string | undefined
): Promise<GetRecommendedUsersSuccessResponse> {
    try {
        let userId: string | undefined;
        if (externalUserId) {
            const { user } = await getSelf(externalUserId);
            userId = user.id;
        }

        const url = `${VITE_BACKEND_BASE_URL}/users/recommended/`;
        const response = await axios.get(url, {
            params: {
                userId,
            },
        });

        if (response.data.error) {
            throw new Error(response.data.error);
        }

        return response.data;
    } catch (error) {
        console.log('GET_RECOMMENDED');
        console.error(error);
        throw new Error('Cannot Get Recommended Users');
    }
}

export default getRecommendedUsers;
