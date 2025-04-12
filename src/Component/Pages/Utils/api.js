import axios from "axios";

const server_url = "https://green-l4k5.onrender.com";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${server_url}/Products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Fetch product details by Title
export const fetchProductTitle = async (Title) => {
  try {
    const response = await axios.get(`${server_url}/Products/${Title}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by title:", error);
    return null;
  }
};

// Fetch products by type
export const fetchProductsByType = async (type) => {
  try {
    const response = await axios.get(`${server_url}/getProductsByType/${type}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by type:", error);
    return [];
  }
};


// User Signup
export const signupUser = async (userData) => {
    try {
      const response = await axios.post(`${server_url}/SignUp`, userData);
      if (response.status === 200) {
        console.log("Signup success:", response.data);
        return response.data;
      } else {
        throw new Error("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      console.error("Error details:", error.response);
      throw new Error(error.response?.data?.message || "Signup failed. Please check your inputs.");
    }
  };
  
  // User Login
  export const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${server_url}/login`, credentials);
      if (response.status === 200) {
        console.log("Login success:", response.data);
        return response.data;
      } else {
        throw new Error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      console.error("Error details:", error.response);
      throw new Error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };
  