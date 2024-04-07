import axios from 'axios';

const BASE_URL = 'http://localhost:5173'; // Update this with your actual backend URL

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email, password) => {
  try {
    const response = await apiService.post('/api/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const registerUser = async (email, password) => {
  try {
    const response = await apiService.post('/api/register', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

// Add other API calls here (e.g., ticket creation, ticket list, etc.)
