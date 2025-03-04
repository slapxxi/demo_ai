import { Suspense } from 'react';
import Posts from '@/components/Posts';
import { getPosts } from '@/lib/getPosts';

const BlogPage = async () => {
  const posts = getPosts();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Posts posts={posts}></Posts>
      </Suspense>
    </div>
  );
};

export default BlogPage;
