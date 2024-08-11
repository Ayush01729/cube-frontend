// src/services/photoService.ts
// export const fetchCatImages = async (count: number): Promise<string[]> => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${count}`);
//     const data = await response.json();
//     return data.map((photo: any) => photo.url);
//   };


import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_T1qzEnLyM70FMySk1EKfSSP9K6vEXZkjYwFZhoPoJn61bKiGD5szsD0VjWxxTtA7'; // Optional: Some endpoints require an API key

export const fetchCatImages = async (count: number = 9): Promise<string[]> => {
  try {
    const response = await axios.get(CAT_API_URL, {
      params: {
        limit: count,
      },
      headers: {
        'x-api-key': API_KEY, // Optional: Include if your API plan requires it
      },
    });

    return response.data.map((image: any) => image.url);
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return [];
  }
};

  