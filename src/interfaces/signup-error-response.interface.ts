export interface SignupErrorResponse {
  status: string;
  data: Data;
  errors: Errors;
}

export interface Data {
  id: null;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  created_at: null;
  updated_at: null;
  provider: string;
  uid: string;
  gender: string;
  push_token: null;
  allow_password_change: boolean;
}

export interface Errors {
  full_messages: string[];
}
