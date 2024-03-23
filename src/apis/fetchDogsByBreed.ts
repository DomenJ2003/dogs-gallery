import axios from "axios";
import { ApiResponse, DogsApiType } from "../types/apiFetchesType";

export const fetchDogsByBreed = async (selectedBreed: string): Promise<ApiResponse<DogsApiType>> => {
  try{
    const response = await axios.get<DogsApiType>(`https://dog.ceo/api/breed/${selectedBreed}/images`)
    return {
      status: true,
      data: response.data
    };
  }catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: false,
        message: error.response?.data || error.message
      };
    }
    return {
      status: false,
      message: 'Network error occurred'
    };
  }
  
}