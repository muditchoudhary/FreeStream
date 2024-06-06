import axios from 'axios';

const { VITE_BACKEND_BASE_URL } = import.meta.env;

async function getRecommendedUsers() {
    const url = `${VITE_BACKEND_BASE_URL}/users/recommended/`;
    const response = await axios.get(url);

    if (response.data.error) {
        throw new Error(response.data.error);
    }

    return response.data;
}

export default getRecommendedUsers;
