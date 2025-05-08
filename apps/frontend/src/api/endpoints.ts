import { NewsFeed } from '../types/types';

export const STRAPI_URL = 'http://localhost:1337';
const STRAPI_API = `${STRAPI_URL}/api`;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
};

export async function getNewsFeed() {
  const response = await fetch(`${STRAPI_API}/newsfeeds?populate=*`, {
    method: 'GET',
    headers,
  });
  if (!response.ok) {
    console.error('Failed to fetch news feeds');
    throw new Error('Failed to fetch news feeds');
  }
  const data = await response.json();
  return data.data.map((item: NewsFeed) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    subtitle: item.subtitle,
    // @ts-expect-error this will give an error but the image url is always there
    image: item.image.url,
    body: item.body,
    // @ts-expect-error this will give an error but the category name is always there
    category: item.category.name,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    publishedAt: item.publishedAt,
  }));
}
