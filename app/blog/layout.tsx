const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-lg font-bold text-gray-800">Blog</h1>
      <section className="mt-2">{children}</section>
    </div>
  );
};

export default BlogLayout;
