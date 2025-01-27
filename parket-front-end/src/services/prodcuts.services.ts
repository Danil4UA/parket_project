import axios from "axios";

const productsServices = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products/all`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getAllProductsById: async (productId: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getProductsByCategory: async (category: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/products`, {
        params: { category }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      throw error;
    }
  }
};

export default productsServices;
