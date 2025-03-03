import { Post } from '@/lib/types';

export async function getPosts(): Promise<Post[]> {
  return [
    { id: 1, title: 'Post 1', content: 'Content 1', description: 'Description 1' },
    { id: 2, title: 'Post 2', content: 'Content 2', description: 'Description 2' },
    { id: 3, title: 'Post 3', content: 'Content 3', description: 'Description 3' },
    { id: 4, title: 'Post 4', content: 'Content 4', description: 'Description 4' },
    { id: 5, title: 'Post 5', content: 'Content 5', description: 'Description 5' },
    { id: 6, title: 'Post 6', content: 'Content 6', description: 'Description 6' },
    { id: 7, title: 'Post 7', content: 'Content 7', description: 'Description 7' },
    { id: 8, title: 'Post 8', content: 'Content 8', description: 'Description 8' },
    { id: 9, title: 'Post 9', content: 'Content 9', description: 'Description 9' },
    { id: 10, title: 'Post 10', content: 'Content 10', description: 'Description 10' },
  ];
}
