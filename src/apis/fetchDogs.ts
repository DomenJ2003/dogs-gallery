import { ApiResponse, DogsApiType } from "../types/apiFetchesType";

export const fetchDogs = async (): Promise<ApiResponse<DogsApiType>> => {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/12`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: DogsApiType = await response.json();

    return {
      status: true,
      data: responseData
    };
  } catch (error) {
    return {
      status: false,
      message: (error as Error).message || 'Network error occurred'
    };
  }
};