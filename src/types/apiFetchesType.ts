type ResponseSuccess<T> = {
    status: true;
    data: T;
  };
  
type ResponseFailure = {
  status: false;
  message: string;
};

export type ApiResponse<T> = ResponseSuccess<T> | ResponseFailure;


export type DogsApiType = {
    message: string[],
    status: "success" | "error"
}