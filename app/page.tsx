import Link from 'next/link';

const Home = () => {
  return (
    <>
      <header className="p-4 mb-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/shop" className="text-blue-500 hover:underline">
                Go to Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-blue-500 hover:underline">
                Go to Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <h1>Welcome to the Home Page!</h1>
        <p>This is the home page.</p>
      </main>
    </>
  );
};

export default Home;
