import { ApiResponse, DogsApi } from "../types";

export const fetchDogsByBreed = async (
  selectedBreed: string
): Promise<ApiResponse<DogsApi>> => {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images`
    );

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
