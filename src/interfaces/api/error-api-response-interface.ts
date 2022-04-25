export interface ErrorApiResponse {
  status: string | boolean;
  data: Object;
  errors: Errors;
}

export interface Errors {
  full_messages: string[];
}
