import axios from 'axios';
import { env } from 'process';

const API_BASE_URL = process.env.API_BASE_URL || 5000;

export const borrowBook = async (userId, bookId) => {
  try {
    const response = await axios.post(`http://localhost:${API_BASE_URL}/borrow`, null, {
      params: { userId, bookId },
      headers: { 'Content-Type': 'text/plain' }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error borrowing book:', error.response?.data || error.message);
  }
}

export const returnBook = async (userId, bookId) => {
  try {
    const response = await axios.post(`http://localhost:${API_BASE_URL}/return`, null, {
      params: { userId, bookId },
      headers: { 'Content-Type': 'text/plain' }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error returning book:', error.response?.data || error.message);
  }
}

export const getRecommendations = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:${API_BASE_URL}/recommendations`, {
      params: { userId }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting recommendations:', error.response?.data || error.message);
    return [];
  }
}
