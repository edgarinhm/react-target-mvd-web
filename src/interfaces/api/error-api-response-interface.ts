export interface ErrorApiResponse {
  status: string;
  data: Object;
  errors: Errors;
}

export interface Errors {
  full_messages: string[];
}
