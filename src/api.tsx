// src/api.ts
import { Cat } from './assets/types';

const Cat_api = 'https://api.thecatapi.com/v1/images/search?limit=10';

export const fetchCats = async (): Promise<Cat[]> => {
  const response = await fetch(Cat_api);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Cat[] = await response.json();
  return data;
};
