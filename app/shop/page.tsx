// `app/shop/page.tsx` is the UI for the `/shop` URL
import Link from 'next/link'; // Import Link from Next.js

const ShopPage = () => {
  return (
    <>
      <header className="p-4 mb-4">
        <nav>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </nav>
      </header>
      <section className="p-4">
        <h1>Welcome to the Shop Page!</h1>
        <p>This is the shop page.</p>
      </section>
    </>
  );
};

export default ShopPage;
