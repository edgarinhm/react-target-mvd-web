export default interface SignupRequest {
  user: User;
}

export interface User {
  username: string;
  email: string;
  gender: string;
  password: string;
  password_confirmation: string;
}
