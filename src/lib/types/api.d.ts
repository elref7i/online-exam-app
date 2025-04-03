declare type SuccessfulResponse<T> = {
  message: 'success';
} & T;

declare type ErrorResponse = {
  message: string;
  code: number;
};

declare type SuccessfulCodeResponse = {
  status: 'Success';
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type CodeResponse = SuccessfulCodeResponse | ErrorResponse;
