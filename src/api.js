import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const addEvent = async (eventData) => {
    const response = await axios.post(`${API_URL}/events`, eventData);
    return response.data;
};