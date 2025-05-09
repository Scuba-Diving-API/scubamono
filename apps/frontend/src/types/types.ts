export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface NewsFeed {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  image: string;
  body: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface EventData {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  image: string;
  body: string;
  startDate: Date;
  endDate: Date;
  type: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface Eduction {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  image: string;
  body: string;
  type: string;
  length: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface Disciplin {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  image: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}
