import { getItems } from '@/lib/getItems'; // Import the getItems function

// Mock function to simulate fetching a product by ID
export const getProductById = async (id: string) => {
  const products = await getItems(); // Fetch all products using getItems
  return products.find((product) => product.id === id) || null; // Find the specific product
};
