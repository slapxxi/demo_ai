// `app/shop/page.tsx` is the UI for the `/shop` URL
const ShopPage = () => {
  return (
    <>
      <header className="mb-4 p-4">
        <nav>
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
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
