import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Ensure this matches your backend

// 🟢 USERS API
// Get all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error?.response?.data || error.message);
    return []; // Return empty array if fetch fails
  }
};

// Add a new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error?.response?.data || error.message);
    return null; // Return null if request fails
  }
};

// 🟢 SERVICE REQUESTS API
// Get all service requests
export const fetchRequests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/requests`);
    return response.data;
  } catch (error) {
    console.error("Error fetching requests:", error?.response?.data || error.message);
    return []; // Return empty array if fetch fails
  }
};

// Add a new service request
export const addRequest = async (requestData) => {
  try {
    console.log(" Sending Request Data:", requestData);
    const response = await axios.post(`${API_BASE_URL}/requests`, requestData);
    return response.data;
  } catch (error) {
    console.error("Error adding request:", error?.response?.data || error.message);
    return null; // Return null if request fails
  }
};
