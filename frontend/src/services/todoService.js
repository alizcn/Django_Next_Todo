import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const todoApi = {
  getTodos: async () => {
    try {
      const response = await axios.get(`${API_URL}/todos/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  },

  getTodo: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/todos/${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching todo ${id}:`, error);
      throw error;
    }
  },

  createTodo: async (todoData) => {
    try {
      const response = await axios.post(`${API_URL}/todos/`, todoData);
      return response.data;
    } catch (error) {
      console.error('Error creating todo:', error);
      throw error;
    }
  },

  updateTodo: async (id, todoData) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${id}/`, todoData);
      return response.data;
    } catch (error) {
      console.error(`Error updating todo ${id}:`, error);
      throw error;
    }
  },

  deleteTodo: async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}/`);
      return true;
    } catch (error) {
      console.error(`Error deleting todo ${id}:`, error);
      throw error;
    }
  }
};
