import { NextResponse } from 'next/server';

interface MockItem {
  id: number;
  title: string;
  description: string;
}

const mockData: MockItem[] = [
  { id: 1, title: 'Mock Item 1', description: 'This is the first mock item.' },
  { id: 2, title: 'Mock Item 2', description: 'This is the second mock item.' },
  { id: 3, title: 'Mock Item 3', description: 'This is the third mock item.' },
];

export async function GET(request: Request) {
  if (request.method === 'GET') {
    return NextResponse.json(mockData);
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
