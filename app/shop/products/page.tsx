import { getItems } from '@/lib/getItems'; // Ensure you import the function to get items
import Link from 'next/link'; // Import Link from Next.js

export default async function ProductsPage() {
  const products = await getItems(); // Fetch the products

  return (
    <div>
      <h1>Available Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/shop/product/${product.id}`} className="text-blue-500 hover:underline">
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
