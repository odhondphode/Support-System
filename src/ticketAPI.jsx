import axios from 'axios';

const BASE_URL = 'http://api.example.com'; // Replace with your API base URL

export const createTicket = async (user, query, attachment) => {
  try {
    const formData = new FormData();
    formData.append('query', query);
    if (attachment) {
      formData.append('attachment', attachment);
    }
    const response = await axios.post(`${BASE_URL}/tickets`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${user.token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const assignTicket = async (ticketId, techSupportId) => {
  try {
    const response = await axios.post(`${BASE_URL}/tickets/${ticketId}/assign`, {
      techSupportId
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const closeTicket = async (ticketId) => {
  try {
    const response = await axios.post(`${BASE_URL}/tickets/${ticketId}/close`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Implement other API functions like assignTicket, closeTicket, etc.
