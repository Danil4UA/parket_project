import axios from 'axios';

const productsServices = {
    getAllProducts:  async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/products/all`);
          return response.data; 
        } catch (error) {
          console.error('Error fetching products:', error);
          throw error;
        }
      },
}


export default productsServices;