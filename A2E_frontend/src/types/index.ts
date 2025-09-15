// Post interface for blog posts
export interface Post {
  _id: string;
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  excerpt?: string;
  createdAt: string;
  updatedAt: string;
}

// Re-export for convenience
export type { Post as BlogPost };

