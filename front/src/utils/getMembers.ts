import axios from 'axios';
import { auth } from './auth';

export const getMembers = async () => {
    const token = await auth();
    const resp = await axios.get('http://localhost:8081/api/members', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return await resp.data;
};
