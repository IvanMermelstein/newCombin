import axios from 'axios';

export const auth = async () => {
    const resp = await axios.post('http://localhost:8081/auth', {
        username: 'sarah',
        password: 'connor',
    });

    return resp.data.token;
};
