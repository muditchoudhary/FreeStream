import axios from 'axios';
import { User } from '@/types/types';

const { VITE_BACKEND_BASE_URL } = import.meta.env;

interface GetSelfSuccessResponse {
    user: User;
}

async function getSelf(
    externalUserId: string
): Promise<GetSelfSuccessResponse> {
    const url = `${VITE_BACKEND_BASE_URL}/users/${externalUserId}`;
    const response = await axios.get(url);

    if (response.data.error) {
        throw new Error(response.data.error);
    }
    return response.data as GetSelfSuccessResponse;
}

export default getSelf;
