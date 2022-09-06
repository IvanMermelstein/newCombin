import axios from 'axios';
import { Member } from './../context/AppContext';
import { auth } from './auth';

export const saveMember = async (newMember: Member) => {
    try {
        const token = await auth();
        await axios.post('http://localhost:8081/api/members', newMember, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (e) {
        throw new Error('Something went wrong');
    }
};
