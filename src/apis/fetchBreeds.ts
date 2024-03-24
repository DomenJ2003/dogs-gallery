import { ApiResponse, DogsApi } from "../types";

export const fetchBreeds = async (): Promise<ApiResponse<DogsApi>> => {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/list`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData: DogsApi = await response.json();

    return {
      status: true,
      data: responseData,
    };
  } catch (error) {
    return {
      status: false,
      message: (error as Error).message || "Network error occurred",
    };
  }
};
