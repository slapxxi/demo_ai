'use client';
import { use } from 'react';
import { Post } from '@/lib/types'; // Adjust the import path as necessary

type PostsProps = {
  posts: Promise<Post[]>;
};

const Posts = ({ posts }: PostsProps) => {
  const allPosts = use(posts);
  return (
    <div>
      {allPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
