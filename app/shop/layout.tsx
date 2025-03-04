import { LayoutProps } from '@/.next/types/app/layout';
import Link from 'next/link';

const ShopLayout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 mb-4 text-white bg-gray-800">
        <h1 className="text-2xl text-white">
          <Link href="/">Home</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/shop" className="text-blue-500 hover:underline">
                Main
              </Link>
            </li>
            <li>
              <Link href="/shop/products" className="text-blue-500 hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/shop/cart" className="text-blue-500 hover:underline">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/shop/checkout" className="text-blue-500 hover:underline">
                Checkout
              </Link>
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
