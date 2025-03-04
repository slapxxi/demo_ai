import { getItems } from '@/lib/getItems'; // Ensure you import the function to get items

export default async function ProductsPage() {
  const products = await getItems(); // Fetch the products

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/shop/product/${product.id}`} className="text-blue-500 hover:underline">
              {product.name} - ${product.price}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
