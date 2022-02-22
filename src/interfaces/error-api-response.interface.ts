export interface ErrorApiResponse {
  status: string;
  data: Data;
  errors: Errors;
}

export interface Data {}

export interface Errors {
  full_messages: string[];
}
