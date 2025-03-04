import { LayoutProps } from '@/.next/types/app/layout';
import { getItems } from '@/lib/getItems'; // Adjust the import path as necessary

const ShopLayout: React.FC<LayoutProps> = async ({ children }) => {
  let items = await getItems();
  console.log(items);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 mb-4 text-white bg-gray-800">
        <h1 className="text-2xl text-white">
          <a href="/">Home</a>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/shop" className="text-blue-500 hover:underline">
                Main
              </a>
            </li>
            <li>
              <a href="/shop/products" className="text-blue-500 hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/shop/cart" className="text-blue-500 hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="/shop/checkout" className="text-blue-500 hover:underline">
                Checkout
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">{children}</main>
      <footer className="p-4 mt-auto text-sm text-center text-white bg-gray-800">
        <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShopLayout;
